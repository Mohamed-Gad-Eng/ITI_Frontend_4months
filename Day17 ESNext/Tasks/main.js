class Product {
    constructor(id, title, price, category, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.image = image;
    }
}

class CartItem {
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }
    increase() {
        this.quantity++;
    }
    decrease() {
        if (this.quantity > 1)
            this.quantity--;
    }
    getTotal() {
        return this.product.price * this.quantity;
    }
}

const productsContainer = document.querySelector("#products");

if (productsContainer) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', "https://fakestoreapi.com/products")
    xhr.send()

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.response)
            products = data.map(p => new Product(p.id, p.title, p.price, p.category, p.image));
            showAll(products);
        }
    }
}

// Hold all the products
let products = [];
// Hold cart items selected by the user
export let items = [];
let storedItems = JSON.parse(localStorage.getItem("cart")) || [];
items = storedItems.map(i => new CartItem(i.product, i.quantity));

// window.addEventListener("load", () => {
//     render()
// })


export function addProduct(product) {
    const productFound = items.find(i => i.product.id === product.id);
    if (productFound)
        productFound.increase();
    else
        items.push(new CartItem(product));
    localStorage.setItem("cart", JSON.stringify(items));
    // render();
}

export function removeProduct(productId) {
    items = items.filter(i => i.product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(items));
}

// export function render() {
//     const div = document.querySelector("#cart");
//     if (!div) return;

//     div.innerHTML = "<h3>Your Shopping Cart 🛒</h3>";
//     if (items.length === 0) {
//         div.innerHTML += "<p>Cart is empty</p>";
//         return;
//     }

//     items.forEach(i => {
//         div.innerHTML += `
//             <div class="cart-item">
//                 <img src="${i.product.image}" alt="${i.product.title}">

//                 <div class="info">
//                     <h4>${i.product.title}</h4>
//                     <p>$${i.product.price.toFixed(2)}</p>
//                 </div>

//                 <div class="quantity-controls">
//                     <button class="qty-btn decrease" data-id="${i.product.id}">−</button>
//                     <span class="qty">${i.quantity}</span>
//                     <button class="qty-btn increase" data-id="${i.product.id}">+</button>
//                 </div>

//                 <strong class="item-total">$${i.getTotal().toFixed(2)}</strong>

//                 <button class="remove" data-id="${i.product.id}">🗑️</button>
//             </div>
//             `;
//     });

//     div.innerHTML += `
//         <div id="cart-summary">
//             <h3>Total: $<span id="cart-total">${getTotalPrice().toFixed(2)}</span></h3>
//             <button id="checkout-btn">Checkout</button>
//         </div>
//         `;

//     div.querySelectorAll(".increase").forEach(btn => {
//         btn.addEventListener("click", e => {
//             const id = parseInt(e.target.dataset.id);
//             const item = items.find(i => i.product.id === id);
//             if (item)
//                 item.increase();
//             localStorage.setItem("cart", JSON.stringify(items));
//             render();
//         });
//     });

//     div.querySelectorAll(".decrease").forEach(btn => {
//         btn.addEventListener("click", e => {
//             const id = parseInt(e.target.dataset.id);
//             const item = items.find(i => i.product.id === id);
//             if (item)
//                 item.decrease();
//             localStorage.setItem("cart", JSON.stringify(items));
//             render();
//         });
//     });

//     div.querySelectorAll(".remove").forEach(btn => {
//         btn.addEventListener("click", e => {
//             const id = parseInt(e.target.dataset.id);
//             removeProduct(id);
//         });
//     });

//     div.querySelector("#checkout-btn").addEventListener("click", () => {
//         items = [];
//         localStorage.setItem("cart", JSON.stringify(items));
//         alert("Thanks for Purchase");
//         render();
//     })
// }

// export function getTotalPrice() {
//     return items.reduce((sum, i) => {
//         return sum + i.getTotal();
//     }, 0);
// }


function showAll(products) {
    const container = document.querySelector("#products");
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="myImg">
            <img src="${product.image}" alt="${product.title}">
            </div>  
            <h4>${product.title}</h4>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add" onClick="myClick(${product.id})">Add to Cart</button>
            `;
        container.appendChild(card);
    })

    // data-id="${product.id}"

    // container.querySelectorAll(".add").forEach(btn => {
    //     btn.addEventListener("click", (e) => {
    //         const id = parseInt(e.target.dataset.id);
    //         let prod = products.find(p => p.id == id);
    //         addProduct(prod);
    //     });
    // })

}

window.myClick = function myClick(id) {
    const prod = products.find(p => p.id == id);
    addProduct(prod);
}