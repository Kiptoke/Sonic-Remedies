import { useTransition, animated } from "react-spring";
import Question from "./question";

const AnimatedQuestions = ({ questions, currentQuestion, handleResponse }) => {
  const transitions = useTransition(questions[currentQuestion], (q) => q.ask, {
    from: {
      transform:
        currentQuestion === 0
          ? "translate3d(0, 0%, 0)"
          : "translate3d(0, 100%, 0)",
    },
    enter: { transform: "translate3d(0, 0, 0)" },
    leave: {
      transform:
        currentQuestion === questions.length - 1
          ? "translate3d(0, 0, 0)"
          : "translate3d(0, -100%, 0)",
    },
  });
  return transitions.map(({ item, props, key }) => {
    return (
      <animated.div className="question-animator" style={props} key={key}>
        <Question question={item} handleResponse={handleResponse} />
      </animated.div>
    );
  });
};

export default AnimatedQuestions;
