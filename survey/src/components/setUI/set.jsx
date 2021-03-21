import "../../css/components/set.scss";
import "../../css/components/set_DT.css";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import Question from "./question";
import FixedUI from "./fixedUI";

const Set = ({ setId, questions }) => {
  const [currentQuestion, updateCurrentQuestion] = useState(0);
  const [savedResponses, updateSavedResponses] = useState([]);
  const handleResponse = (response) => {
    const updatedResponses = [...savedResponses, response];
    updateSavedResponses(updatedResponses);
    updateCurrentQuestion(currentQuestion + 1);
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
    <div className="set">
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
