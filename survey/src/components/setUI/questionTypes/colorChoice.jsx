import "../../../css/components/colorChoice.scss";
import { useState, useEffect } from "react";
import MultipleChoice from "./multipleChoice";
import UserButton from "../../common/userButton";

function ShowColor(response, setChoseYes, setChoseNo) {
  if (response === 0) {
    setChoseYes(true);
    setChoseNo(false);
  } else if (response === 1) {
    setChoseNo(true);
    setChoseYes(false);
  }
}
function renderYesNo(setChoseYes, setChoseNo) {
  return (
    <MultipleChoice
      responses={["Yes", "No"]}
      handleResponded={(response) => {
        ShowColor(response, setChoseYes, setChoseNo);
      }}
    />
  );
}
const ColorChoice = ({ responses, handleResponded }) => {
  const [choseYes, setChoseYes] = useState(false);
  const [choseNo, setChoseNo] = useState(false);
  const [color, setColor] = useState("#000000");
  const params = [setChoseYes, setChoseNo];

  useEffect(() => {
    let response = "No Color";
    if (choseYes) response = color;
    if (choseYes || choseNo) handleResponded(response);
    else handleResponded(null);
  });

  if (choseNo) {
    return renderYesNo(...params);
  }
  return !choseYes & !choseNo ? (
    renderYesNo(...params)
  ) : (
    <div className="question-color">
      <p>Select the color: </p>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <UserButton
        text={"Go Back"}
        onClick={() => {
          setChoseYes(false);
        }}
      />
    </div>
  );
};

export default ColorChoice;
