import "../css/components/set.css";
import "../css/components/set_DT.css";
import Question from "./question";
import FixedUI from "./fixedUI";

const Set = ({ setId, questions }) => {
  return (
    <div className="set">
      <div className="set_questions">
        {questions.map((question) => {
          return <Question key={question.ask} question={question} />;
        })}
      </div>
      <FixedUI />
    </div>
  );
};

export default Set;
