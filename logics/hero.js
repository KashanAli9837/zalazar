
// TypeWrite Animation
const element = document.querySelector(".typingTextContainer");
const txt = "Engineering";
let i = 0;

const element2 = document.querySelector(".ceoMessage");
const txt2 = "Our CEO'S Messasge";
let f = 0;


function typeWriter(i, element, txt, speed) {
  if (i < txt.length) {
    element.innerHTML += txt[i];
    i++;
    setTimeout(() => {
      typeWriter(i, element, txt, speed);
    }, speed);
  }
  if (txt.length - 1 === i) {
    element.style.border = "none";
  }
}
typeWriter(i, element, txt, 70);

gsap.to(element2, {
  onStart: () => typeWriter(f, element2, txt2, 40),
  scrollTrigger: element2
});
