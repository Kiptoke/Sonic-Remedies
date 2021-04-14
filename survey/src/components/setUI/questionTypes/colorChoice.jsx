import "../../../css/components/colorChoice.scss";
import { useState } from "react";
import MultipleChoice from "./multipleChoice";
import UserButton from "../../common/userButton";

function ShowColor(response, handleResponded, setChoseYes, setChoseNo) {
  if (response === 0) {
    setChoseYes(true);
    setChoseNo(false);
  } else if (response === 1) {
    setChoseNo(true);
    setChoseYes(false);
  }
  handleResponded(response);
}
function renderYesNo(handleResponded, setChoseYes, setChoseNo) {
  return (
    <MultipleChoice
      responses={["Yes", "No"]}
      handleResponded={(response) => {
        ShowColor(response, handleResponded, setChoseYes, setChoseNo);
      }}
    />
  );
}
const ColorChoice = ({ responses, handleResponded }) => {
  const [choseYes, setChoseYes] = useState(false);
  const [choseNo, setChoseNo] = useState(false);
  const params = [handleResponded, setChoseYes, setChoseNo];

  if (choseNo) {
    return renderYesNo(...params);
  }
  return !choseYes & !choseNo ? (
    renderYesNo(...params)
  ) : (
    <div className="question-color">
      <p>Select the color: </p>
      <input type="color" />
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
