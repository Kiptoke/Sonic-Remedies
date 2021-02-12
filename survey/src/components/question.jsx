import "../css/components/question.css";
import MultipleChoice from "./multipleChoice";

function Question({ question }) {
  const { ask, responses } = question;
  //Later add logic for if the question.type is not multiple choice
  return (
    <div className="question">
      <MultipleChoice ask={ask} responses={responses} />
    </div>
  );
}

export default Question;
