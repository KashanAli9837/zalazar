const menu_icon = document.querySelector(".menu_icon");
const cross_icon = document.querySelector(".cross_icon");
const nav = document.querySelector("nav");

menu_icon.addEventListener("click", () => {
  if (nav.style.left === "0px") {
    nav.style.left = "-350px";
  } else {
    nav.style.left = "0px";
  }
});

cross_icon.addEventListener("click", () => {
  nav.style.left = "-350px";
});

// TypeWrite Animation
const element = document.querySelector(".typingTextContainer");
const txt = "Engineering";
const speed = 70;
let i = 0;

function typeWriter() {
  if (i < txt.length) {
    element.innerHTML += txt[i];
    i++;
    setTimeout(typeWriter, speed);
  }
  if (txt.length - 1 === i) {
    element.style.border = "none";
  }
}
typeWriter();
