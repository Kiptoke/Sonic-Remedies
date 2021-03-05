import "../../css/components/question.scss";
import { useState } from "react";
import NextButton from "./nextButton";
import MultipleChoice from "./multipleChoice";
import MultipleSelect from "./multipleSelect";
import FreeResponse from "./freeResponse";
import ColorChoice from "./colorChoice";

function handleNext(handleResponse, setClickedNext) {
  handleResponse();
  setClickedNext(true); //to hide the arrow (avoid double click)
}
function renderQuestion(type, responses, handleResponded) {
  const params = { responses: responses, handleResponded: handleResponded };
  if (type === "mc") return <MultipleChoice {...params} />;
  else if (type === "ms") return <MultipleSelect {...params} />;
  else if (type === "fr") return <FreeResponse {...params} />;
  else if (type === "color") return <ColorChoice {...params} />;
}

function Question({ question, handleResponse, pos }) {
  const { type, ask, responses } = question;
  const [response, setResponse] = useState(null);
  const [clickedNext, setClickedNext] = useState(false);

  function handleResponded(response) {
    setResponse(response);
  }
  //Later add logic for if the question.type is not multiple choice
  return (
    <div className="question" id={"question" + pos}>
      <h1>{ask}</h1>
      {renderQuestion(type, responses, handleResponded)}
      <div className="next">
        <NextButton
          revealNext={(response !== null) & !clickedNext}
          pos={pos}
          handleClicked={() => handleNext(handleResponse, setClickedNext)}
        />
      </div>
    </div>
  );
}

export default Question;
