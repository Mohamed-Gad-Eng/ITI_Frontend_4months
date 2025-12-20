// console.log('hello from Node js')

// const fileSys = require("fs");
// const {sum,devide}=require('./myMathModule.js')

// sum(3,5)

// const data=fileSys.readFileSync('demo.txt','utf-8')
// console.log(data);

// fileSys.readFile("demo.txt","utf-8", function (err, data) {
//   console.log(data);
// });
// fileSys.readFile("demo1.txt","utf-8", function (err, data) {
// if(err){
//  console.error(err);
// }
//   console.log(data);
// });

// console.log("after sync");

// fileSys.writeFile('demo.txt','hello world!',(err)=>{
//   console.log('finish writing');
// })
// fileSys.writeFile("demo1.txt", "hello front end", (err) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("finish writing");
// });
// fileSys.appendFile('demo.txt','\nnew content',()=>{
//     console.log('appended to file');
// })

// http
// first api
// http://localhost:3002/  ,GET  ===>'home Page'
// http://localhost:3002/products  ,GET ===>all Products Data
// http://localhost:3002/about ,GET  ===>'about Page'
// http://localhost:3002/addProduct ,Post  ===> your product is created

const http = require("http");
const products = require("./allProducts.json");
const server = http.createServer((req, res) => {
  // endPoints/Apis
  if (req.url == "/" && req.method == "GET") {
    res.end(`
<html lang="en">
<body>
    <h1>Welcome to Home Page</h1>
</body>
</html>
      `);
  } else if (req.url == "/about" && req.method == "GET") {
    res.end("welcome to About Page");
  } else if (req.url == "/products" && req.method == "GET") {
    res.end(JSON.stringify(products));
  } else if (req.url.startsWith("/product/") && req.method == "GET") {
    const productId = +req.url.split("/")[2];
    let product = products.find((product) => product.id == productId);
    if (product) {
      res.end(JSON.stringify(product));
    } else {
      res.end("No Product with this Id");
    }
  } else if (req.url == "/addproduct" && req.method == "POST") {
    let body = "";
    req.on("data", (chunck) => {
      console.log(chunck);
      body += chunck;
    });

    req.on("end", () => {
      const newProcut = JSON.parse(body);
      newProcut.id = products.length + 1;
      products.push(newProcut);
      res.end(JSON.stringify(newProcut))
    });
  }
});

server.listen(3002, () => {
  console.log("server running!");
});


// http://localhost:3002
