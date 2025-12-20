const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");
var cors = require('cors')
const server = express();

mongoose
  .connect("mongodb://localhost:27017/your_db_name")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("error in connection to db");
  });

server.use(cors())  
server.use(express.json());

server.use("/todo", todoRoutes);
server.use("/user", userRoutes);

server.listen(3002, () => {
  console.log("server connected!");
});

