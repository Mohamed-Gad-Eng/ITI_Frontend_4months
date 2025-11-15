import {items, removeProduct} from "./main.js"

window.addEventListener("load", () => {
    render();
})

function render() {
    const div = document.querySelector("#cart");
    if (!div) return;

    div.innerHTML = "<h3>Your Shopping Cart 🛒</h3>";
    if (items.length === 0) {
        div.innerHTML += "<p>Cart is empty</p>";
        return;
    }

    items.forEach(i => {
        div.innerHTML += `
            <div class="cart-item">
                <img src="${i.product.image}" alt="${i.product.title}">

                <div class="info">
                    <h4>${i.product.title}</h4>
                    <p>$${i.product.price.toFixed(2)}</p>
                </div>

                <div class="quantity-controls">
                    <button class="qty-btn decrease" data-id="${i.product.id}">−</button>
                    <span class="qty">${i.quantity}</span>
                    <button class="qty-btn increase" data-id="${i.product.id}">+</button>
                </div>

                <strong class="item-total">$${i.getTotal().toFixed(2)}</strong>

                <button class="remove" data-id="${i.product.id}">🗑️</button>
            </div>
            `;
    });

    div.innerHTML += `
        <div id="cart-summary">
            <h3>Total: $<span id="cart-total">${getTotalPrice().toFixed(2)}</span></h3>
            <button id="checkout-btn">Checkout</button>
        </div>
        `;

    div.querySelectorAll(".increase").forEach(btn => {
        btn.addEventListener("click", e => {
            const id = parseInt(e.target.dataset.id);
            const item = items.find(i => i.product.id === id);
            if (item)
                item.increase();
            localStorage.setItem("cart", JSON.stringify(items));
            render();
        });
    });

    div.querySelectorAll(".decrease").forEach(btn => {
        btn.addEventListener("click", e => {
            const id = parseInt(e.target.dataset.id);
            const item = items.find(i => i.product.id === id);
            if (item)
                item.decrease();
            localStorage.setItem("cart", JSON.stringify(items));
            render();
        });
    });

    div.querySelectorAll(".remove").forEach(btn => {
        btn.addEventListener("click", e => {
            const id = parseInt(e.target.dataset.id);
            removeProduct(id);
            render();
        });
    });

    div.querySelector("#checkout-btn").addEventListener("click", () => {
        items.length = 0;
        localStorage.setItem("cart", JSON.stringify(items));
        alert("Thanks for Purchase");
        render();
    })
}

function getTotalPrice() {
    return items.reduce((sum, i) => {
        return sum + i.getTotal();
    }, 0);
}