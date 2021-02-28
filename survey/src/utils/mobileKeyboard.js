import { updateViewHeight, freezeViewHeight } from "./viewHeight";
function onOpenKB() {
  freezeViewHeight();
}
function onCloseKB() {
  updateViewHeight();
}
export { onOpenKB, onCloseKB };
