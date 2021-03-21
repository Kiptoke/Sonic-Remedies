import "../../css/components/fixedUI.scss";
import "../../css/components/fixedUI_DT.css";
import React from "react";
import { ReactComponent as CircleEmpty } from "../../vectors/circleEmpty.svg";
import { ReactComponent as CircleFilled } from "../../vectors/circleFilled.svg";

const renderCircles = (numCirc, currentPos) => {
  let circles = [];
  for (let i = 0; i < numCirc; i++) {
    i < currentPos
      ? circles.push(<CircleFilled key={i} className="circle" />)
      : circles.push(<CircleEmpty key={i} className="circle" />);
  }
  return circles;
};

const FixedUI = ({ numQuestions: numCirc, currentQuestion: currentPos }) => {
  return (
    <div className="fixed-UI">
      <div className="circles">{renderCircles(numCirc, currentPos)}</div>
    </div>
  );
};

export default FixedUI;
