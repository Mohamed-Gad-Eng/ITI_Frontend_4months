const express = require("express");
const Product = require("../models/product");
let products = require("../allProducts.json");
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.get('/getAll', (req, res) => {
    try {
        let prods = products.map(p => new Product(p.id, p.title, p.price));
        if (prods.length == 0) {
            return res.status(200).json({ message: "No Products Yet" });
        }
        res.status(200).json(prods);
    }
    catch (err) {
        res.status(500).json({ massage: err.message });
    }
});

router.get("/:id", (req, res) => {
    const productId = Number(req.params.id);
    let prod = products.find(p => p.id == productId);
    if (!prod) return res.status(404).json({ message: "No Product with this id" });
    res.status(200).json(new Product(prod.id, prod.title, prod.price))
})

router.put("/:id", [
    body("title")
        .exists()
        .withMessage("title is required")
        .isString()
        .withMessage("title must be string")
        .isLength({ min: 3 })
        .withMessage("must be at least 3 char"),
    body("price")
        .exists()
        .withMessage("price is required")
        .isDecimal()
        .withMessage("price must be a decimal")
], (req, res) => {
    const productId = Number(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    let prod = products.find(p => p.id == productId);
    if (!prod) return res.status(404).json({ message: "No Product with this id" });

    let { title, price } = req.body;

    prod.title = title;
    prod.price = price;

    res.status(200).json({
        message: "Product Updated Successfully",
        data: new Product(prod.id, prod.title, prod.price)
    })
})

router.post("/addProduct", [
    body("title")
        .exists()
        .withMessage("name is required")
        .isString()
        .withMessage("title must be string")
        .isLength({ min: 3 })
        .withMessage("must be at least 3 char"),
    body("price")
        .exists()
        .withMessage("price is required")
        .isDecimal()
        .withMessage("price must be a decimal")
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    const newProd = {
        "id": products.length + 1,
        "title": `${req.body.name}`,
        "price": req.body.price,
        "description": "",
        "category": "",
        "image": "",
        "rating": {
            "rate": 0,
            "count": 0
        }
    };
    products.push(newProd);
    return res.status(201).json({ message: "Product Added Successfully", product: newProd });
})

router.delete("/:id", (req, res) => {
const productId = Number(req.params.id);
    let prod = products.find(p => p.id == productId);
    if (!prod) return res.status(404).json({ message: "No Product with this id" });
    products = products.filter(p => p.id != productId);
    return res.status(204).json({ message: "Product Deleted!" });
})

module.exports = router;
