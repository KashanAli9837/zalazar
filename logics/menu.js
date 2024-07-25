const menu_icon = document.querySelector(".menu_icon");
// const cross_icon = document.querySelector(".cross_icon");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

menu_icon.addEventListener("click", () => {
  toggleMenu();
});

// cross_icon.addEventListener("click", () => {
//   nav.style.left = "-400px";
//   overlay.classList.toggle('hidden');
// });

overlay.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  overlay.classList.remove("hidden");

  if (nav.style.left === "0px") {
    nav.style.left = "-400px";
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 300);
  } else {
    nav.style.left = "0px";
    overlay.style.opacity = "1";
  }
}
