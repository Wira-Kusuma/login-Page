// swiching login and register

let toLogin = document.getElementById("toLogin");
let toRegister = document.getElementById("toRegister");

let loginForm = document.getElementById("loginForm");
let registerForm = document.getElementById("registerForm");

let registerBtn = document.getElementById("registerBtn");
let loginBtn = document.getElementById("loginBtn");

toLogin.addEventListener("click", loginSwich);
toRegister.addEventListener("click", registerSwich);

loginBtn.addEventListener("click", loginSwich);
registerBtn.addEventListener("click", registerSwich);

function loginSwich() {
    loginForm.classList.add("efek");
    registerForm.style.display = "none";
    loginForm.style.display = "flex";

    loginBtn.style.display = "none";
    registerBtn.style.display = "flex";
}

function registerSwich() {
    registerForm.classList.add("efek");
    loginForm.style.display = "none";
    registerForm.style.display = "flex";

    registerBtn.style.display = "none";
    loginBtn.style.display = "flex";
}



// form validation below

// login validation
/** @type {HTMLInputElement} */
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");

let loginFormValidation = document.getElementById("loginFormValidation");


document.getElementById("loginNow").addEventListener("click", validation)

function validation() {
    if (userEmail.value === localStorage.getItem("email") && userPassword.value === localStorage.getItem("password")) {
        // display notification if login succeed
        document.getElementById("notif").style.display = "flex";
        loginFormValidation.innerText = "";
        userEmail.value = "";
        userPassword.value = "";
    }

    else if (userEmail.value === "" || userPassword.value === "") {
        loginFormValidation.innerText = "Email or Password cannot blank"
    }

    else if (userEmail.value !== "admin" || userPassword.value !== "admin123") {
        // detele wrong validation after login
        loginFormValidation.innerText = "Email or Password wrong!"
        // to delete after logging
        userEmail.value = "";
        userPassword.value = "";
    }
}



function closeNotif() {
    document.getElementById("notif").style.display = "none";
    document.getElementById("notifRegister").style.display = "none";
    document.getElementById("ldata").style.display = "none";
}



// register validation

/** @type {HTMLInputElement} */
let registerEmail = document.getElementById("registerEmail");
let registerPassword = document.getElementById("registerPassword");
let registerPasswordConfirm = document.getElementById("registerPasswordConfirm");

let registerFormValidation = document.getElementById("registerFormValidation");

document.getElementById("register").addEventListener("click", validationRegister);

function validationRegister() {
    if (registerEmail.value === "" || registerPassword.value === "") {
        registerFormValidation.innerText = "Email or password cannot blank";
    }
    else if (registerPasswordConfirm.value === "") {
        registerFormValidation.innerText = "Confirm the password";
    }

    else {
        // display notification if login succeed
        document.getElementById("notifRegister").style.display = "flex";
        // detele wrong validation after login
        registerFormValidation.innerText = "";

        // Save registration data to localStorage

        localStorage.setItem("email", registerEmail.value);
        localStorage.setItem("password", registerPassword.value);

        // empty after save to local storage
        registerEmail.value = "";
        registerPassword.value = "";
        registerPasswordConfirm.value = "";
    }
}

document.querySelector("header>h1").addEventListener('click', function () {
    document.getElementById("ldata").style.display = "flex";
})

const ldata = document.querySelector("#ldata>.notif")
const newEle = document.createElement("p")
newEle.innerHTML = `
email : ${localStorage.getItem("email")} <br>
password ${localStorage.getItem("password")}`;

ldata.appendChild(newEle);