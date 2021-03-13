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
  console.log(selections);
  if (i === selections.length - 1) {
    //Chose none of the above
    for (let j = 0; j < i; j++) selections[j] = false;
  }
  if (selections[selections.length - 1] && i !== selections.length - 1) {
    //If none of the above is chosen and wasn't just selected
    selections[selections.length - 1] = false;
  }
  selections[i] = !selections[i];
  return selections;
};

const MultipleSelect = ({ responses, handleResponded }) => {
  responses = [...responses, "None of the above"];
  let init = [];
  for (let i = 0; i < responses.length; i++) init[i] = false;
  const [selections, setSelections] = useState(init);

  useEffect(() => {
    if (selections.find((el) => el === true)) handleResponded(selections);
    else handleResponded(null);
  }, [selections, handleResponded]);

  return (
    <div className="question-ms option-box">
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
