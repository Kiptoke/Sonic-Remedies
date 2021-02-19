import "../css/components/multipleChoice.scss";
import { useState, useEffect } from "react";
import { ReactComponent as SelectChosen } from "../vectors/circleFilled.svg";
import { ReactComponent as SelectNotChosen } from "../vectors/circleEmpty.svg";

const renderSelect = (a, selections) => {
  return selections.includes(a) ? (
    <SelectChosen className="radio" />
  ) : (
    <SelectNotChosen className="radio" />
  );
};

const Select = (selection, selections, setSelections) => {
  if (selections.includes(selection)) {
    selections.splice(selections.indexOf(selection), 1);
  } else {
    selections.push(selection);
  }
  setSelections(selection);
};

const MultipleSelect = ({ responses, handleSelections }) => {
  const [selections, setSelections] = useState([]);
  useEffect(() => {
    if (selections.length > 0) {
      handleSelections(selections);
    }
  }, [handleSelections, selections]);
  return (
    <div className="question-ms container-fluid p-0">
      {responses.map((res, num) => {
        return (
          <div
            key={num}
            className="option"
            onClick={() => {
              Select(num, selections, setSelections);
            }}
          >
            <div className="response">{res}</div>
            {renderSelect(num, selections)}
          </div>
        );
      })}
    </div>
  );
};

export default MultipleSelect;
