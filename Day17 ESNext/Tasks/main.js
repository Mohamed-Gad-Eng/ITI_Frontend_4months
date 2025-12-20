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



var pageSize = 8;


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


// ----------------- Toast Message ----------------

function showCartMessage(message = "Item added to cart!") {
    const toast = document.getElementById("cart-toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1800); // disappears after 1.8s
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



function getFilteredProducts(pageSize = 8, pageIndex = 1) {
    if (!productsContainer) return; // only on pages with products

    showLoadingSkeleton(pageSize);

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

    // fetch(url)
    //     .then(res => {
    //         if (!res.ok) {
    //             throw new Error(`HTTP error: ${res.status}`);
    //         }
    //         return res.json();
    //     })
    //     .then(result => {
    //         // result has: pageIndex, pageSize, count, data[]
    //         console.log("Result:", result);

    //         // Map backend data → Product objects
    //         products = result.data.map(
    //             p => new Product(p.id, p.title, p.price, p.category, p.image)
    //         );

    //         showAll(products);

    //         // If you have a pagination function, compute total pages
    //         if (typeof setupPagination === "function") {
    //             const totalPages = Math.ceil(result.count / result.pageSize);
    //             setupPagination(totalPages, pageIndex);
    //         }
    //     })
    //     .catch(err => console.error("Fetch error:", err));

    fetchWithRetry(url)
        .then(result => {
            products = result.data.map(
                p => new Product(p.id, p.title, p.price, p.category, p.image)
            );

            showAll(products);

            if (typeof setupPagination === "function") {
                const totalPages = Math.ceil(result.count / result.pageSize);
                setupPagination(totalPages, pageIndex);
            }
        })
        .catch(err => {
            console.error("Final fetch error:", err);
            productsContainer.innerHTML = `
                <div style="
                    max-width: 400px;
                    margin: 50px auto;
                    padding: 20px 25px;
                    color: #000;
                    text-align: center;
                    background: rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(10px);
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.35);
                    font-size: 1.1rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
                ">
                    Failed to load products.<br>Please refresh the page.
                </div>
            `;

        });

}

function fetchWithRetry(url, retries = 10, delay = 500) {
    return new Promise((resolve, reject) => {

        function attemptFetch(remaining) {
            fetch(url)
                .then(res => res.json())
                .then(data => {

                    // Backend didn't return real data yet → retry
                    if (!data || !data.data || data.data.length === 0) {
                        if (remaining > 0) {
                            console.warn(`Retrying... (${10 - remaining + 1})`);
                            return setTimeout(() => attemptFetch(remaining - 1), delay);
                        }
                        return reject("Backend did not respond with valid data.");
                    }

                    // Success
                    resolve(data);
                })
                .catch(err => {
                    if (remaining > 0) {
                        console.warn(`Fetch failed → retrying... (${10 - remaining + 1})`);
                        return setTimeout(() => attemptFetch(remaining - 1), delay);
                    }
                    reject(err);
                });
        }

        attemptFetch(retries);
    });
}

// --------------------------Skeleton loading-----------------------------

function showLoadingSkeleton(count = 8) {
    const container = document.querySelector("#products");
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
        const skeleton = document.createElement("div");
        skeleton.classList.add("skeleton-card");

        skeleton.innerHTML = `
            <div class="skeleton-img"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line small"></div>
        `;

        container.appendChild(skeleton);
    }
}


// --------------------------window loading-----------------------------
window.onload = function () {

    window.myClick = function myClick(id) {
        const prod = products.find(p => p.id == id);
        addProduct(prod);
        showCartMessage();
    }

    if (productsContainer) {
        getFilteredProducts(pageSize);

        // Only apply filters *after user interaction*
        ["sort", "category", "search"].forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const eventName = id === "search" ? "input" : "change";
            el.addEventListener(eventName, () => getFilteredProducts(pageSize));
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

                getFilteredProducts(pageSize); // refresh results
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