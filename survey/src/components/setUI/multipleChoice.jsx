import "../../css/components/multipleChoice.scss";
import { useState, useEffect } from "react";
import { ReactComponent as RadioChosen } from "../../vectors/circleFilled.svg";
import { ReactComponent as Radio } from "../../vectors/circleEmpty.svg";

const renderRadar = (a, b) => {
  return a === b ? (
    <RadioChosen className="radio" />
  ) : (
    <Radio className="radio" />
  );
};

const MultipleChoice = ({ responses, handleChosen }) => {
  const [choice, setChoice] = useState(-1);
  useEffect(() => {
    if (choice > -1) {
      handleChosen(true);
    }
  }, [handleChosen, choice]);
  return (
    <div className="question-mc container-fluid p-0">
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
