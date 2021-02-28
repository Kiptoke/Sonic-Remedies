import { useState, useEffect } from "react";
import { ReactComponent as SelectChosen } from "../../vectors/squareFilled.svg";
import { ReactComponent as SelectNotChosen } from "../../vectors/squareEmpty.svg";

const renderSelect = (selections, i) => {
  return selections[i] === true ? (
    <SelectChosen className="indicator" />
  ) : (
    <SelectNotChosen className="indicator" />
  );
};

const Select = (selections, i) => {
  selections[i] = !selections[i];
  return selections;
};

const MultipleSelect = ({ responses, handleResponded }) => {
  let init = [];
  for (let i = 0; i < responses.length; i++) init[i] = false;
  const [selections, setSelections] = useState(init);

  useEffect(() => {
    if (selections.find((el) => el === true)) handleResponded(true);
    else handleResponded(false);
  }, [selections, handleResponded]);

  return (
    <div className="question-ms">
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
