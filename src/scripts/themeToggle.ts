type Theme = "dark" | "light";

const moon = document.querySelector("#moon") as HTMLSpanElement;
const sun = document.querySelector("#sun") as HTMLSpanElement;

const theme: Theme = (() => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme") as Theme;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
})();

if (theme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  sun.setAttribute("data-current", "");
} else {
  document.documentElement.setAttribute("data-theme", "dark");
  moon.setAttribute("data-current", "");
}

window.localStorage.setItem("theme", theme);

moon.addEventListener("click", function () {
  const element = document.documentElement;

  if (element.getAttribute("data-theme") === "dark") {
    return;
  } else {
    element.setAttribute("data-theme", "dark");
    window.localStorage.setItem("theme", "dark");
    moon.setAttribute("data-current", "");
    sun.removeAttribute("data-current");
  }
});

sun.addEventListener("click", function () {
  const element = document.documentElement;

  if (element.getAttribute("data-theme") === "light") {
    return;
  } else {
    element.setAttribute("data-theme", "light");
    window.localStorage.setItem("theme", "light");
    sun.setAttribute("data-current", "");
    moon.removeAttribute("data-current");
  }
});
