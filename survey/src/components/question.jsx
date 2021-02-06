import MultipleChoice from "./multipleChoice";

function Question({ question }) {
  const { ask, responses } = question;
  //Later add logic for if the question.type is not multiple choice
  return <MultipleChoice ask={ask} responses={responses} />;
}

export default Question;
