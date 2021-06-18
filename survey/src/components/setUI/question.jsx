import "../../css/components/question.scss";
import { useState } from "react";
import NextButton from "./nextButton";
import CondQuestion from "./questionTypes/condQuestion";
import MultipleChoice from "./questionTypes/multipleChoice";
import MultipleSelect from "./questionTypes/multipleSelect";
import FreeResponse from "./questionTypes/freeResponse";
import ColorChoice from "./questionTypes/colorChoice";
import Slider from "./questionTypes/slider";

function handleNext(response, handleResponse, setClickedNext) {
  handleResponse(response);
  setClickedNext(true); //to hide the arrow (avoid double click)
}
function renderQuestion(type, responses, handleResponded, config) {
  const params = {
    responses: responses,
    handleResponded: handleResponded,
    config: config,
  };
  if (type === "multiple-choice") return <MultipleChoice {...params} />;
  else if (type === "check-box") return <MultipleSelect {...params} />;
  else if (type === "short-answer") return <FreeResponse {...params} />;
  else if (type === "color") return <ColorChoice {...params} />;
  else if (type === "slider") return <Slider {...params} />;
}

function Question({ question, handleResponse }) {
  const { type, responses, config } = question;
  let { ask } = question;
  const [response, setResponse] = useState(null);
  const [inCond, setInCond] = useState(
    question.config && question.config.condQuestion
  );
  const [clickedNext, setClickedNext] = useState(false);

  function handleResponded(response) {
    setResponse(response);
  }

  return (
    <div>
      {inCond && (
        <div className="question">
          <CondQuestion
            question={question.config.condQuestion}
            handleYes={() => setInCond(false)}
            handleClickedNext={() => {
              handleNext("Cond No", handleResponse, setClickedNext);
            }}
          />
        </div>
      )}
      {!inCond && (
        <div className="question">
          <h1>{ask}</h1>
          {renderQuestion(type, responses, handleResponded, config)}
          <div className="next">
            <NextButton
              revealNext={(response !== null) & !clickedNext}
              handleClicked={() => {
                handleNext(response, handleResponse, setClickedNext);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
