import "../../css/components/set.scss";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import Question from "./question";
import FixedUI from "./fixedUI";
import MusicPage from "./musicPlayer/musicPage";

const Set = ({ setId, set, setCurrentSet }) => {
  const questions = set.questions;
  const [currentQuestion, updateCurrentQuestion] = useState(0);
  const [savedResponses, updateSavedResponses] = useState([]);
  const [musicDone, setMusicDone] = useState(set.music ? false : true);
  const handleResponse = (response) => {
    const updatedResponses = [...savedResponses, response];
    updateSavedResponses(updatedResponses);
    if (currentQuestion === questions.length - 1) {
      updateCurrentQuestion(0);
      setCurrentSet(setId + 1);
      setMusicDone(set.music ? false : true);
    } else {
      updateCurrentQuestion(currentQuestion + 1);
    }
  };
  const transitions = useTransition(questions[currentQuestion], (q) => q.ask, {
    from: {
      transform:
        currentQuestion === 0
          ? "translate3d(0, 0%, 0)"
          : "translate3d(0, 100%, 0)",
    },
    enter: { transform: "translate3d(0, 0, 0)" },
    leave: { transform: "translate3d(0, -100%, 0)" },
  });
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
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div className="question-animator" style={props} key={key}>
              <Question question={item} handleResponse={handleResponse} />
            </animated.div>
          );
        })}
      </div>
      <FixedUI
        numQuestions={questions.length}
        currentQuestion={currentQuestion}
      />
    </div>
  );
};

export default Set;
