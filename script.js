import SweetScroll from "sweet-scroll";

const sections = [...document.querySelectorAll(".section")].map(element => ({
  element,
  top: element.offsetTop
}));

const navi = document.querySelector(".navi");
const naviTop = navi.offsetTop;

window.addEventListener("scroll", () => {
  const { pageYOffset: winPageYOffset, innerHeight: winInnerHeight } = window;
  const scroll = winPageYOffset + winInnerHeight - 2;
  sections.forEach(
    ({ element, top }) =>
      scroll >= top && element.classList.add("section--show")
  );
  navi.classList[winPageYOffset > naviTop ? "add" : "remove"]("navi--fixed");
});

new SweetScroll({ updateURL: true });

document
  .querySelectorAll(".logo path.animpath")
  .forEach(
    el =>
      (el.style.strokeDasharray = el.style.strokeDashoffset = el.getTotalLength())
  );

requestAnimationFrame(() =>
  document.querySelector(".logo svg").classList.add("show")
);
