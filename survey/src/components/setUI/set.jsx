import "../../css/components/set.scss";
import { useState } from "react";
import AnimatedQuestions from "./animatedQuestions";
import FixedUI from "./fixedUI";
import MusicPage from "./musicPlayer/musicPage";

const Set = ({ setId, set, nextSet, setCurrentSet }) => {
  const questions = set.questions;
  const [currentQuestion, updateCurrentQuestion] = useState(0);
  const [savedResponses, updateSavedResponses] = useState([]);
  const [musicDone, setMusicDone] = useState(set.music ? false : true);
  const handleResponse = (response) => {
    const updatedResponses = [...savedResponses, response];
    updateSavedResponses(updatedResponses);
    if (currentQuestion === questions.length - 1) {
      //End of set
      if (nextSet) {
        updateCurrentQuestion(0);
        setCurrentSet(setId + 1);
        setMusicDone(nextSet.music ? false : true);
      } else {
        console.log("Survey complete!");
      }
    } else {
      updateCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="set global-container">
      <div className="music-page" style={musicDone ? { display: "none" } : {}}>
        <MusicPage
          file_path={"../../audio/BNS_BWV538.mp3"}
          handleMusicDone={() => {
            setMusicDone(true);
          }}
        />
      </div>
      <div className="set-questions">
        <AnimatedQuestions
          questions={questions}
          currentQuestion={currentQuestion}
          handleResponse={handleResponse}
        />
      </div>
      <FixedUI
        numQuestions={questions.length}
        currentQuestion={currentQuestion}
      />
    </div>
  );
};

export default Set;
