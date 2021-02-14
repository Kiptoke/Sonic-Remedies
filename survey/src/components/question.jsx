import "../css/components/question.scss";
import MultipleChoice from "./multipleChoice";
import { useState } from "react";

function renderNext(ifChosen) {
  return ifChosen ? (
    <div className="next-button"></div>
  ) : (
    <div className="next-button chosen"></div>
  );
}

function Question({ question }) {
  const { ask, responses } = question;
  const [ifChosen, setIfChosen] = useState(false);
  //Later add logic for if the question.type is not multiple choice
  return (
    <div className="question">
      <h1>{ask}</h1>
      <MultipleChoice responses={responses} setIfChosen={setIfChosen} />
      {renderNext(ifChosen)}
    </div>
  );
}

export default Question;
