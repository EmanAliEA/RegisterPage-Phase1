import { getFromStorage, saveToStorage } from "./script.js";

let users = getFromStorage() || [];

const register_btn = document.querySelector(".register_btn");
const login_btn = document.querySelector(".login_btn");
const img_btn = document.querySelector(".img_btn");
const imgElem = document.querySelector(".img");
const registerForm = document.querySelector(".register");
const loginFrom = document.querySelector(".login");
const registerInfo = registerForm.querySelectorAll(
  "input:not(input[type=checkbox])"
);
const loginInfo = loginFrom.querySelectorAll("input:not(input[type=checkbox])");
let login = false;

// functions
function getSignUpInfo() {
  const name = registerInfo[0].value;
  const email = registerInfo[1].value;
  const password = registerInfo[2].value;
  if (!name || !email || !password) {
    alert("All fields are required");
    return true;
  }
  const isFound = users.find((user) => user.email === email);
  if (isFound) {
    alert("Email already exists");
  } else {
    const newUser = { name, email, password };
    alert("Signup successful");
    users.push(newUser);
    saveToStorage(users);
  }
  return isFound;
}
function getLoginInfo() {
  const email = loginInfo[0].value;
  const password = loginInfo[1].value;
  if (!email || !password) {
    alert("All fields are required");
    return false;
  }
  const isFound = users.find((user) => user.email === email);
  if (isFound) {
    isFound.password === password
      ? alert("Login successful")
      : alert("Wrong password");
  } else {
    alert("Email not found");
  }
  return isFound;
}

function changeForm() {
  imgElem.classList.toggle("moveLeft");
  imgElem.querySelector("a").innerText = login ? "login" : "signup";
  registerForm.classList.toggle("d-none");
  loginFrom.classList.toggle("d-none");
  login = !login;
}

function goToProfile(user) {
  sessionStorage.setItem("user", JSON.stringify(user));

  // // Define the base URL
  // const baseUrl = "/src/profile.html";

  // // Convert the parameters to a query string
  // const queryString = new URLSearchParams(user).toString();

  // // Append the query string to the base URL
  // const fullUrl = `${baseUrl}?${queryString}`;

  // Redirect to the new URL
  window.location.href = "/src/profile.html";
}

img_btn.addEventListener("click", (e) => {
  e.preventDefault();

  changeForm();
});
register_btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(parent);
  const isFound = getSignUpInfo();
  isFound && registerInfo.forEach((input) => (input.value = ""));
  // Email not found
  !isFound && changeForm();
});

login_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const user = getLoginInfo();
  !user && loginInfo.forEach((elem) => (elem.value = ""));
  if (user) {
    console.log("success");
    goToProfile(user);
    // window.location.href = "/src/profile.html";
  }
});
