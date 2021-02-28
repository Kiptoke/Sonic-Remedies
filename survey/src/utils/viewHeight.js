function setViewHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
function initViewHeight() {
  setViewHeight();
  updateViewHeight();
}
function updateViewHeight() {
  window.addEventListener("resize", setViewHeight);
}
function freezeViewHeight() {
  window.removeEventListener("resize", setViewHeight);
}
export { initViewHeight, updateViewHeight, freezeViewHeight };
