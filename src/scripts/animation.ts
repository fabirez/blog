import { gsap } from "gsap";

const cont_logo = document.querySelectorAll(".cont_logo");

const tl = gsap.timeline({ paused: true });
tl.to(".asterisk", {
  rotate: 360,
  duration: 1,
  ease: "bounce.out",
});

cont_logo.forEach((el) => {
  el.addEventListener("mouseenter", function () {
    tl.restart();
  });
});
