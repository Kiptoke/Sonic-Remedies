import "../../css/components/question.scss";
import MultipleChoice from "./multipleChoice";
import MultipleSelect from "./multipleSelect";
import { useState } from "react";
import NextButton from "./nextButton";

function renderQuestion(type, responses, handleAnswered) {
  if (type === "mc")
    return (
      <MultipleChoice responses={responses} handleChosen={handleAnswered} />
    );
  else if (type === "ms")
    return (
      <MultipleSelect responses={responses} handleSelection={handleAnswered} />
    );
}

function Question({ question, handleResponse, pos }) {
  const { type, ask, responses } = question;
  const [ifChosen, setIfAnswered] = useState(false);

  function handleAnswered(answered) {
    setIfAnswered(answered);
  }
  //Later add logic for if the question.type is not multiple choice
  return (
    <div className="question" id={"question" + pos}>
      <h1>{ask}</h1>
      {renderQuestion(type, responses, handleAnswered)}
      <div className="next">
        <NextButton
          revealNext={ifChosen}
          pos={pos}
          handleClicked={handleResponse}
        />
      </div>
    </div>
  );
}

export default Question;
