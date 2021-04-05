// import AnimatedPath from "./animatedPath";
import Path from "./path";

const constructPath = (mapRef) => {
  const Nodes = mapRef.querySelectorAll("div.map-node");
  const { x: startx, y: starty, width } = Nodes[0].getBoundingClientRect();

  const X = (x) => {
    return Math.floor(x);
  };
  const Y = (y) => {
    return Math.floor(y);
  };

  let path = "M " + X(startx) + " " + Y(starty);
  for (let i = 1; i < Nodes.length; i++) {
    const node = Nodes[i];
    const { x, y } = node.getBoundingClientRect();
    path += " L " + X(x) + " " + Y(y);
  }
  console.log(path);
  return path;
};
const PathAnimator = ({ mapRef }) => {
  if (mapRef) {
    const path = constructPath(mapRef);
    return <Path path={path}></Path>;
  }
  return null;
};

export default PathAnimator;
