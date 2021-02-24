import "../../css/components/fixedUI.scss";
import "../../css/components/fixedUI_DT.css";
import React from "react";
import { ReactComponent as CircleEmpty } from "../../vectors/circleEmpty.svg";
import { ReactComponent as CircleFilled } from "../../vectors/circleFilled.svg";

const renderCircles = (numCirc, currentCirc) => {
  let circles = [];
  for (let i = 0; i < numCirc; i++) {
    i <= currentCirc
      ? circles.push(<CircleFilled key={i} className="circle" />)
      : circles.push(<CircleEmpty key={i} className="circle" />);
  }
  return circles;
};

const FixedUI = ({ numQuestions: numCirc, currentQuestion: currentCirc }) => {
  return (
    <div className="fixedUI">
      <div className="circles">{renderCircles(numCirc, currentCirc)}</div>
    </div>
  );
};

export default FixedUI;
