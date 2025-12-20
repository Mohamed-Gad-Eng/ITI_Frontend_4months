class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const http = require("http");
let products = require("./allProducts.json");
const { json } = require("stream/consumers");

const server = http.createServer((req, res) => {
    // CORS HEADERS 
    res.setHeader("Access-Control-Allow-Origin", "*");          // allow all domains
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");  // allowed methods
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight request
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    // Controller Named      (Products)
    if (req.url == "/Products/getAll" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });

        let prods = products.map(p => new Product(p.id, p.title, p.price));
        return res.end(JSON.stringify(prods));
    }
    else if (req.url.startsWith("/Products/") && req.method == "GET") {
        const productId = Number(req.url.split("/")[2]);
        let product = products.find(p => p.id == productId);
        res.writeHead(200, { "Content-Type": "application/json" });
        if (product) {
            return res.end(JSON.stringify(new Product(product.id, product.title, product.price)));
        }
        return res.end("No Product Found with this Id");
    }
    else if (req.url.startsWith("/Products/") && req.method == "PUT") {
        const productId = Number(req.url.split("/")[2]);
        let product = products.find(p => p.id == productId);

        if (!product) {
            return res.end("Product not found");
        }

        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            if (!body) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ message: "Request body is empty" }));
            }

            const data = JSON.parse(body);

            let errors = [];
            if (!data.title)
                errors.push("Title is required");
            if (!data.price)
                errors.push("Price is required");

            if (errors.length > 0) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ message: "Validation failed", errors }));
            }

            product.title = data.title;
            product.price = data.price;

            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(product));
        });
        return;
    }
    else if (req.url == "/Products/addProduct" && req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const data = JSON.parse(body)
            const newProd = {
                "id": products.length + 1,
                "title": `${data.title}`,
                "price": data.price,
                "description": "",
                "category": "",
                "image": "",
                "rating": {
                    "rate": 0,
                    "count": 0
                }
            };
            products.push(newProd);

            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(newProd));
        });
        return;
    }
    else if (req.url.startsWith("/Products/") && req.method == "DELETE") {
        const productId = Number(req.url.split("/")[2]);
        let product = products.find(p => p.id == productId);

        res.writeHead(204, { "Content-Type": "application/json" });
        if (!product) {
            return res.end("Product not found");
        }
        products = products.filter(p => p.id != productId);
        return res.end(JSON.stringify({ message: "Product deleted"}));
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from server!");
})

server.listen(3002, () => {
    console.log("server running!");
});