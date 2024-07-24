const menu_icon = document.querySelector(".menu_icon");
const cross_icon = document.querySelector(".cross_icon");
const nav = document.querySelector("nav");

menu_icon.addEventListener("click", () => {
  if (nav.style.left === "0px") {
    nav.style.left = "-400px";
  } else {
    nav.style.left = "0px";
  }
});

cross_icon.addEventListener("click", () => {
  nav.style.left = "-400px";
});