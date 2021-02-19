import "../css/components/fixedUI.scss";
import "../css/components/fixedUI_DT.css";

const renderCircles = (numCirc, currentCirc) => {
  let circles = [];
  for (let i = 0; i < numCirc; i++) {
    i <= currentCirc
      ? circles.push(<div key={i} className="circle circle-filled"></div>)
      : circles.push(<div key={i} className="circle circle-empty"></div>);
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
