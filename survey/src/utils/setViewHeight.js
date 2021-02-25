function setViewHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  window.addEventListener("resize", () => {
    let evh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${evh}px`);
  });
}
export default setViewHeight;
