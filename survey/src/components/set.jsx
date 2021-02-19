import "../css/components/set.scss";
import "../css/components/set_DT.css";
import { useState } from "react";
import Question from "./question";
import FixedUI from "./fixedUI";

const Set = ({ setId, questions }) => {
  const [currentQuestion, updateCurrentQuestion] = useState(-1);
  const handleResponse = () => {
    updateCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div className="set">
      <div className="set_questions">
        {questions.map((question, id) => {
          return (
            <Question
              key={id}
              pos={id}
              question={question}
              handleResponse={handleResponse}
            />
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
