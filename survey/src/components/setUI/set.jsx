import "../../css/components/set.scss";
import { useState } from "react";
import AnimatedQuestions from "./animatedQuestions";
import FixedUI from "./fixedUI";
import MusicPage from "./musicPlayer/musicPage";
import OrientationPage from "./orientationPage";
import CompletePage from "./completePage";

const Set = ({
  musicFilename,
  setId,
  set,
  setCurrentSet,
  totalSets,
  postResponse,
}) => {
  const questions = set.questions;
  const [currentQuestion, updateCurrentQuestion] = useState(0);
  const [page, setPage] = useState("orientation");
  const [savedResponses, updateSavedResponses] = useState([]);
  const handleResponse = (response) => {
    const updatedResponses = [...savedResponses, response];
    updateSavedResponses(updatedResponses);
    if (currentQuestion === questions.length - 1) {
      //End of questions

      if (setId !== totalSets - 1) {
        updateCurrentQuestion(0);
        setCurrentSet(setId + 1);
        setPage("orientation");
      } else {
        //We are at the end of the survey
        setPage("complete");
        postResponse(updatedResponses);
      }
    } else {
      console.log("Got here");
      updateCurrentQuestion(currentQuestion + 1);
    }
  };

  switch (page) {
    case "orientation":
      return (
        <OrientationPage
          setId={setId}
          totalSets={totalSets}
          clickContinue={() => {
            if (set.music) setPage("music");
            else {
              setPage("questions");
            }
          }}
        />
      );
    case "music":
      return (
        <div className="music-page global-container">
          <MusicPage
            filename={musicFilename}
            handleMusicDone={() => {
              setPage("questions");
            }}
          />
        </div>
      );
    case "questions":
      return (
        <div className="set global-container">
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
    case "complete":
      return <CompletePage />;
    default:
      return null;
  }
};

export default Set;
