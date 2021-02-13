import "../css/components/multipleChoice.scss";
import { useState } from "react";

const renderRadar = (a, b) => {
  return a === b ? (
    <div className="radar chosen"></div>
  ) : (
    <div className="radar"></div>
  );
};

const MultipleChoice = ({ responses }) => {
  const [choice, setChoice] = useState(-1);
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
