const express = require("express");
const productRoutes = require("./routes/product")

const server = express();


server.use(express.json());
server.use("/Products", productRoutes);

server.listen(3002, () => {
    console.log("server connected!");
})