import "../css/components/fixedUI.scss";

const renderCircles = (numCirc, currentCirc) => {
  let circles = [];
  for (let i = 1; i <= numCirc; i++) {
    i === currentCirc
      ? circles.push(<div className="circle circle-filled"></div>)
      : circles.push(<div className="circle circle-empty"></div>);
  }
  return circles;
};

const FixedUI = (props) => {
  const numCirc = 4;
  const currentCirc = 2;
  return (
    <div className="fixedUI">
      <div className="circles">{renderCircles(numCirc, currentCirc)}</div>
    </div>
  );
};

export default FixedUI;
