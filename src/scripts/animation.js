import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/all";

// Text that will be animated
const splitTitle = document.querySelectorAll(".splitTitle");

// Remove the warning "SplitText called before fonts loaded"
gsap.registerPlugin(ScrambleTextPlugin);
document.fonts.ready.then(() => {
  // Random chars used for the animation
  const defaultChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let scramble = (event) => {
    const target = event.target;
    if (!gsap.isTweening(target)) {
      // check if the animation is arleady running
      gsap.to(target, {
        duration: 0.8,
        ease: "sine.in",
        scrambleText: {
          text: target.innerText,
          chars: defaultChars,
          speed: 2,
        },
      });
    }
  };

  // Select only the text with the class splitTitle
  for (const titles of splitTitle) {
    titles.addEventListener("pointerenter", scramble);
    titles.addEventListener("focus", scramble);
  }
});

const cont_logo = document.querySelectorAll(".cont_logo");
const tl = gsap.timeline({ paused: true });
tl.to(".asterisk", {
  rotate: 360,
  duration: 1,
  ease: "bounce.out",
});

cont_logo.forEach((el) => {
  el.addEventListener("mouseenter", function() {
    tl.restart();
  });
});
