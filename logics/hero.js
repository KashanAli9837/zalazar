
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
