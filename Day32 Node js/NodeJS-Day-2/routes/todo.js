const express = require("express");
let todos = require("../todosData.json");
let TodoModel = require("../models/todo");
let statusEnum = require("../utils/status");
const { body, validationResult } = require("express-validator");

// CRUD
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await TodoModel.find();
    if (todos.length == 0) {
      return res.status(200).json({ message: "No Todos Yet" });
    }
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ massage: err.message });
  }
  // res.json(todos).status(200);
});
// GET ,/todo/id ==>single todo with this id
// route params
router.get("/:id", (req, res) => {
  const todoId = +req.params.id;
  let todo = todos.find((todo) => todo.id == todoId);
  if (!todo) return res.status(404).json({ message: "No Todo with this id" });
  res.status(200).json(todo);
});
// POST ,/addtodo,request body ===>Post created sucssessfully
// request encode
router.post("/addtodo", async (req, res) => {
  try {
    let todo = new TodoModel({
      title: req.body.title,
      status: req.body.status || "todo",
    });

    const createdtodo = await todo.save();
    res.status(201).json({ message: "todo added successfully", todo: createdtodo });
  } catch (error) {
    res.status(500).json({ message: `error creating todo ${error.message}` });
  }
});

// Put /todo/
// validation

router.put(
  "/:id",
  [
    body("title")
      .exists()
      .withMessage("Title is required")
      .isString()
      .withMessage("title must be string")
      .isLength({ min: 3 })
      .withMessage("must be at least 3 char"),
    body("status")
      .exists()
      .withMessage("status is required")
      .isString()
      .withMessage("status must be a string")
      .isIn(statusEnum)
      .withMessage(`status must be one of: ${statusEnum.join(", ")}`),
  ],
  (req, res) => {
    const todoId = +req.params.id;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    let index = todos.findIndex((todo) => todo.id == todoId);
    if (index == -1) {
      return res.status(404).json({ message: "No Todo with this id" });
    }
    let { title, status } = req.body;
    todos[index] = { id: todoId, title, status };
    res.status(200).json({
      message: "Todo updated Successfully",
      data: todos[index],
    });
  }
);

router.delete("/:id", (req, res) => {
  let todoId = +req.params.id;
  let todo = todos.find((todo) => todo.id == todoId);
  if (!todo) {
    return res.status(404).json({ message: "No Todo with this id" });
  }

  todos = todos.filter((todo) => todo.id != todoId);
  res.json({ message: "Todo deleted!" });
});

module.exports = router;
