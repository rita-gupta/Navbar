const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

const signUp = document.getElementsByClassName("sign-up");
const btn = document.getElementById("btn");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// hamburger.addEventListener("click", () => {
//   btn.classList.toggle("show");
// });
