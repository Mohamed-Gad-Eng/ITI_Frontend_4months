function showLoginLoading() {
    const box = document.querySelector(".login-box");

    box.insertAdjacentHTML("beforeend", `
        <div id="login-loading" style="
            margin-top: 15px;
            padding: 10px;
            text-align: center;
            color: #222;
            background: rgba(255,255,255,0.25);
            backdrop-filter: blur(8px);
            border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.4);
            box-shadow: 0 3px 8px rgba(0,0,0,0.2);
        ">
            <i class="fa-solid fa-hourglass-end fa-spin fa-lg" style="color: #07070e;"></i> Logging in...
        </div>
    `);
}

function hideLoginLoading() {
    const el = document.getElementById("login-loading");
    if (el) el.remove();
}

function showErrorMessage(message) {
    const box = document.querySelector(".login-box");

    box.insertAdjacentHTML("beforeend", `
        <div id="login-error" style="
            margin-top: 15px;
            padding: 12px;
            color: #000;
            background: rgba(255, 100, 100, 0.25);
            backdrop-filter: blur(8px);
            border-radius: 10px;
            border: 1px solid rgba(255, 100, 100, 0.5);
            font-weight: 600;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        ">
            <i class="fa-solid fa-ban fa-fade fa-lg" style="color: #ff0000;"></i> ${message}
        </div>
    `);

    setTimeout(() => {
        document.getElementById("login-error")?.remove();
    }, 3000);
}

function showSuccessMessage(message) {
    const box = document.querySelector(".login-box");

    box.insertAdjacentHTML("beforeend", `
        <div id="login-success" style="
            margin-top: 15px;
            padding: 12px;
            color: #000;
            background: rgba(100, 255, 100, 0.25);
            backdrop-filter: blur(8px);
            border-radius: 10px;
            border: 1px solid rgba(100, 255, 100, 0.5);
            font-weight: 600;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        ">
            <i class="fa-solid fa-check fa-lg" style="color: #009e1a;"></i> ${message}
        </div>
    `);

    setTimeout(() => {
        document.getElementById("login-success")?.remove();
    }, 2000);
}


window.onload = function () {
    const loginBox = document.getElementById("loginBox");
    const registerBox = document.getElementById("registerBox");

    const baseUrl = "http://localhost:5116";

    document.getElementById("registerForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const body = {
            displayName: document.getElementById("registerName").value,
            email: document.getElementById("registerEmail").value,
            phoneNumber: document.getElementById("registerPhone").value,
            password: document.getElementById("registerPassword").value
        };

        try {
            const res = await fetch(`${baseUrl}/Account/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            if (!res.ok) throw new Error("Registration failed");

            alert("Registration successful! You can now login.");

            // Switch to login box
            document.getElementById("registerBox").style.display = "none";
            document.getElementById("loginBox").style.display = "block";

        } catch (err) {
            alert("Error: " + err.message);
        }
    });

    // ------------------ Login ------------------

    document.getElementById("loginForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const body = {
            email: document.getElementById("loginEmail").value,
            password: document.getElementById("loginPassword").value
        };

        showLoginLoading();

        try {
            const res = await fetch(`${baseUrl}/Account/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            // Case 1 — Wrong credentials
            if (res.status === 400 || res.status === 401) {
                hideLoginLoading();
                showErrorMessage("Incorrect email or password.");
                return;
            }

            // Case 2 — Any other backend error (500, 404…)
            if (!res.ok) {
                hideLoginLoading();
                showErrorMessage("Server error. Please try again later.");
                return;
            }

            const data = await res.json();

            localStorage.setItem("token", data.token);

            hideLoginLoading();
            showSuccessMessage("Login successful! Redirecting...");

            setTimeout(() => {
                window.location.href = "shop.html";
            }, 1200);

        } catch (err) {
            hideLoginLoading();
            showErrorMessage("Login failed. Please check your connection or try again later.");
        }
    });

    // ------------------ Toggle Between Forms ------------------

    document.getElementById("showRegister").addEventListener("click", () => {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("registerBox").style.display = "block";
    });

    document.getElementById("showLogin").addEventListener("click", () => {
        document.getElementById("registerBox").style.display = "none";
        document.getElementById("loginBox").style.display = "block";
    });


    document.querySelectorAll('.header a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
};

