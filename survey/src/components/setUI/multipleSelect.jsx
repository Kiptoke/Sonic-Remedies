import "../../css/components/multipleSelect.scss";
import { useState, useEffect } from "react";
import { ReactComponent as SelectChosen } from "../../vectors/squareFilled.svg";
import { ReactComponent as SelectNotChosen } from "../../vectors/squareEmpty.svg";

const renderSelect = (selections, i) => {
  return selections[i] === true ? (
    <SelectChosen className="radio" />
  ) : (
    <SelectNotChosen className="radio" />
  );
};

const Select = (selections, i) => {
  selections[i] = !selections[i];
  return selections;
};

const MultipleSelect = ({ responses, handleSelection }) => {
  let init = [];
  for (let i = 0; i < responses.length; i++) init[i] = false;
  const [selections, setSelections] = useState(init);

  useEffect(() => {
    handleSelection(selections);
  }, [selections, handleSelection]);

  return (
    <div className="question-ms container-fluid p-0">
      {responses.map((res, num) => {
        return (
          <div
            key={num}
            className="option"
            onClick={() => {
              setSelections(Select([...selections], num));
            }}
          >
            <div className="response">{res}</div>
            {renderSelect(selections, num)}
          </div>
        );
      })}
    </div>
  );
};

export default MultipleSelect;
