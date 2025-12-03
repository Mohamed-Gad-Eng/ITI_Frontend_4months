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

// ---------------- GLOBALS ----------------
const productsContainer = document.querySelector("#products");

// if (productsContainer) {
//     let xhr = new XMLHttpRequest()
//     xhr.open('GET', "https://fakestoreapi.com/products")
//     xhr.send()

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             let data = JSON.parse(xhr.response)
//             products = data.map(p => new Product(p.id, p.title, p.price, p.category, p.image));
//             showAll(products);
//         }
//     }
// }

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


// ---------------- Render Products ----------------
function showAll(productsArray) {
    const container = document.querySelector("#products");
    if (!container) return;

    container.innerHTML = "";

    productsArray.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="favorite-icon">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="myImg">
                <img src="${product.image}" alt="${product.title}">
            </div>  
            <h4>${product.title}</h4>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add" onClick="myClick(${product.id})">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

// function showAll(products) {
//     const container = document.querySelector("#products");
//     if (!container) return;

//     container.innerHTML = "";

//     products.forEach(product => {
//         const card = document.createElement("div");
//         card.classList.add("card");
//         card.innerHTML = `
//                             <div class="favorite-icon">
//                         <i class="fa-regular fa-heart"></i>
//                     </div>
//             <div class="myImg">
//             <img src="${product.image}" alt="${product.title}">
//             </div>  
//             <h4>${product.title}</h4>
//             <p>$${product.price.toFixed(2)}</p>
//             <button class="add" onClick="myClick(${product.id})">Add to Cart</button>
//             `;
//         container.appendChild(card);
//     })

// data-id="${product.id}"

// container.querySelectorAll(".add").forEach(btn => {
//     btn.addEventListener("click", (e) => {
//         const id = parseInt(e.target.dataset.id);
//         let prod = products.find(p => p.id == id);
//         addProduct(prod);
//     });
// })

// }


// ------------------------Backend Intergration--------------------

const baseUrl = "http://localhost:5116";

const sortMap = {
    "": null,              // Not Sorted → send null or skip in URL
    "rating": "rating",
    "price": "price",
    "pricedesc": "pricedesc"
};

const categoryMap = {
    "": null, // All → no filter
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3
};



function getFilteredProducts(pageIndex = 1, pageSize = 8) {
    if (!productsContainer) return; // only on pages with products

    // Build query params safely
    const params = new URLSearchParams({
        PageIndex: pageIndex,
        PageSize: pageSize,
    });

    // Sorting
    const rawSortValue = document.getElementById("sort")?.value || "";
    const sort = sortMap[rawSortValue];

    // Category
    const selectedCategory = document.getElementById("category")?.value || "";
    const category = categoryMap[selectedCategory];

    // Search
    const search = document.getElementById("search")?.value.trim() || "";

    if (category != null) params.append("Category", category);
    if (sort != null) params.append("Sort", sort);
    if (search) params.append("Search", search);

    const url = `${baseUrl}/Products/getAll?${params.toString()}`;

    console.log("Fetching:", url);

    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error: ${res.status}`);
            }
            return res.json();
        })
        .then(result => {
            // result has: pageIndex, pageSize, count, data[]
            console.log("Result:", result);

            // Map backend data → Product objects
            products = result.data.map(
                p => new Product(p.id, p.title, p.price, p.category, p.image)
            );

            showAll(products);

            // If you have a pagination function, compute total pages
            if (typeof setupPagination === "function") {
                const totalPages = Math.ceil(result.count / result.pageSize);
                setupPagination(totalPages, pageIndex);
            }
        })
        .catch(err => console.error("Fetch error:", err));
}




// --------------------------window loading-----------------------------
window.onload = function () {

    window.myClick = function myClick(id) {
        const prod = products.find(p => p.id == id);
        addProduct(prod);
    }

    if (productsContainer) {
        // Load ALL products first ⚡
        getFilteredProducts();

        // Only apply filters *after user interaction*
        ["sort", "category", "search"].forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const eventName = id === "search" ? "input" : "change";
            el.addEventListener(eventName, () => getFilteredProducts());
        });
    }

    document.querySelectorAll('.sidebar .custom-select').forEach((customSelect) => {
        const selectedOption = customSelect.querySelector('.selected-option');
        const optionsList = customSelect.querySelector('.options-list');
        const originalSelect = customSelect.querySelector('select');


        selectedOption.addEventListener("click", () => {
            const isVisible = optionsList.style.display === "block";

            document.querySelectorAll(".options-list").forEach(list => {
                list.style.display = "none";
            });

            optionsList.style.display = isVisible ? "none" : "block";
        });

        optionsList.querySelectorAll("li").forEach((option) => {
            option.addEventListener("click", () => {
                selectedOption.textContent = option.textContent;
                originalSelect.value = option.getAttribute("data-value");
                optionsList.style.display = "none";

                getFilteredProducts(); // refresh results
            });
        });

        document.addEventListener("click", function (e) {
            if (!customSelect.contains(e.target)) {
                optionsList.style.display = "none";
            }
        });
    });


    // need to make it in the rendering for product selection
    document.querySelectorAll('.header a').forEach(link => {
        const rawHref = link.getAttribute('href');
        if (!rawHref || rawHref === '#') return; // skip placeholder links
        const currentPath = window.location.pathname.replace(/\/$/, '');
        const linkPath = new URL(rawHref, window.location.href).pathname.replace(/\/$/, '');
        if (linkPath === currentPath) link.classList.add('active');
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.favorite-icon')) {
            const heart = e.target.tagName === "I" ? e.target : e.target.querySelector("i");
            heart.classList.toggle('fa-regular');
            heart.classList.toggle('fa-solid');
            heart.style.color = heart.classList.contains('fa-solid') ? '#ff0000' : '#fff';
        }
    });

}