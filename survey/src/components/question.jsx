import "../css/components/question.scss";
import MultipleChoice from "./multipleChoice";

function Question({ question }) {
  const { ask, responses } = question;
  //Later add logic for if the question.type is not multiple choice
  return (
    <div className="question">
      <h1>{ask}</h1>
      <MultipleChoice responses={responses} />
      <div className="next-button">Next</div>
    </div>
  );
}

export default Question;
