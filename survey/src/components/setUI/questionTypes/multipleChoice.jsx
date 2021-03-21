import { useState, useEffect } from "react";
import { ReactComponent as RadioChosen } from "../../../vectors/circleFilled.svg";
import { ReactComponent as Radio } from "../../../vectors/circleEmpty.svg";

const renderRadar = (a, b) => {
  return a === b ? (
    <RadioChosen className="indicator" />
  ) : (
    <Radio className="indicator" />
  );
};

const MultipleChoice = ({ responses, handleResponded }) => {
  const [choice, setChoice] = useState(-1);
  useEffect(() => {
    if (choice > -1) {
      handleResponded(choice);
    } else handleResponded(null);
  }, [handleResponded, choice]);
  return (
    <div className="question-mc option-box">
      {responses.map((res, num) => {
        return (
          <div key={num} className="option" onClick={() => setChoice(num)}>
            <div className="response">{res}</div>
            {renderRadar(choice, num)}
          </div>
        );
      })}
    </div>
  );
};

export default MultipleChoice;
