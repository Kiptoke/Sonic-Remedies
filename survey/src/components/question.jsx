import "../css/components/question.scss";
import MultipleChoice from "./multipleChoice";
import { useState } from "react";

function renderNext(ifChosen) {
  return ifChosen ? (
    <div className="next-button chosen"></div>
  ) : (
    <div className="next-button"></div>
  );
}

function Question({ question }) {
  const { ask, responses } = question;
  const [ifChosen, setIfChosen] = useState(false);

  function handleChosen() {
    setIfChosen(true);
  }
  //Later add logic for if the question.type is not multiple choice
  return (
    <div className="question">
      <h1>{ask}</h1>
      <MultipleChoice responses={responses} handleChosen={handleChosen} />
      {renderNext(ifChosen)}
    </div>
  );
}

export default Question;
