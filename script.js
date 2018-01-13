import SweetScroll from "sweet-scroll";

const sections = [...document.querySelectorAll(".section")].map(element => ({
  element,
  top: element.offsetTop
}));

const navi = document.querySelector(".navi");
const naviTop = navi.offsetTop;

window.addEventListener("scroll", () => {
  const { pageYOffset: winPageYOffset, innerHeight: winInnerHeight } = window;
  const scroll = winPageYOffset + winInnerHeight;
  sections.forEach(
    ({ element, top }) =>
      scroll >= top && element.classList.add("section--show")
  );
  navi.classList[winPageYOffset > naviTop ? "add" : "remove"]("navi--fixed");
});

new SweetScroll({ updateURL: true });
