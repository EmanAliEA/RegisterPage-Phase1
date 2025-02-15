// Get the query string from the current URL
const queryString = window.location.search;

// Parse the query string into an object
const params = new URLSearchParams(queryString);

// Access individual parameters
const main = document.querySelector("main");
const logOut = document.querySelector(".logOut-btn");
const user = JSON.parse(sessionStorage.getItem("user"));
// const name = params.get("name");
// const email = params.get("email");
// const password = params.get("password");

function profile() {
  document.querySelector(".navName").innerText = `${user.name}`;
  main.querySelector("h1").innerHTML = `welcome ${user.name}`;
  main.querySelector("p:nth-child(2)").innerHTML = `<b>Email</b>:${user.email}`;
  main.querySelector(
    "p:nth-child(3)"
  ).innerHTML = `<b>Password</b>:${user.password}`;
}

profile();

logOut.addEventListener("click", () => {
  window.location.href = "../../index.html";
});
