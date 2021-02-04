import "../css/components/multipleChoice.css";
import "../css/components/question.css";
const MultipleChoice = ({ question, answers }) => {
  return (
    <div className="question container-fluid p-0">
      <h1>{question}</h1>
      {answers.map((ans) => {
        return (
          <div className="row align-items-center no-gutters">
            <div className="col">
              <h2>{ans}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleChoice;
