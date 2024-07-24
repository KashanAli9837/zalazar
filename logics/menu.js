const menu_icon = document.querySelector(".menu_icon");
const cross_icon = document.querySelector(".cross_icon");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

menu_icon.addEventListener("click", () => {
  toggleMenu();
});

cross_icon.addEventListener("click", () => {
  nav.style.left = "-400px";
  overlay.classList.toggle('hidden');
});

overlay.addEventListener("click", () => {
  toggleMenu();
})

function toggleMenu() {
  if (nav.style.left === "0px") {
    nav.style.left = "-400px";
  } else {
    nav.style.left = "0px";
  }
  overlay.classList.toggle('hidden');
}