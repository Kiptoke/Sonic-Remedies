function scroll(el) {
  setTimeout(function () {
    el.scrollIntoView({ behavior: "smooth" });
  }, 100);
}
export default scroll;
