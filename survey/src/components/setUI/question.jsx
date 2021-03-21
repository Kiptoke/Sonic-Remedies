import "../../css/components/question.scss";
import { useState, useEffect, useRef } from "react";
import NextButton from "./nextButton";
import MultipleChoice from "./questionTypes/multipleChoice";
import MultipleSelect from "./questionTypes/multipleSelect";
import FreeResponse from "./questionTypes/freeResponse";
import ColorChoice from "./questionTypes/colorChoice";
import MusicPlayer from "./musicPlayer/musicPlayer";

function handleNext(response, handleResponse, setClickedNext) {
  handleResponse(response);
  setClickedNext(true); //to hide the arrow (avoid double click)
}
function renderQuestion(type, responses, handleResponded) {
  const params = { responses: responses, handleResponded: handleResponded };
  if (type === "mc") return <MultipleChoice {...params} />;
  else if (type === "ms") return <MultipleSelect {...params} />;
  else if (type === "fr") return <FreeResponse {...params} />;
  else if (type === "color") return <ColorChoice {...params} />;
}

function Question({ question, handleResponse }) {
  const { type, responses } = question;
  let { ask } = question;
  ask += type === "ms" ? " Select all that apply." : "";
  const [response, setResponse] = useState(null);
  const [musicDone, setMusicDone] = useState(false);
  const [clickedNext, setClickedNext] = useState(false);
  const q_old = useRef(question);

  useEffect(() => {
    if (question !== q_old) {
      setResponse(null);
      setClickedNext(false);
    }
  }, [question, q_old]);
  function handleResponded(response) {
    setResponse(response);
  }
  //Later add logic for if the question.type is not multiple choice
  return !musicDone ? (
    <div className="music-page">
      <div className="music-player">
        <MusicPlayer
          file_path={"../../audio/BNS_BWV538.mp3"}
          handleMusicDone={() => {
            setMusicDone(true);
          }}
        />
      </div>
    </div>
  ) : (
    <div className="question">
      <h1>{ask}</h1>
      {renderQuestion(type, responses, handleResponded)}
      <div className="next">
        <NextButton
          revealNext={(response !== null) & !clickedNext}
          handleClicked={() =>
            handleNext(response, handleResponse, setClickedNext)
          }
        />
      </div>
    </div>
  );
}

export default Question;
