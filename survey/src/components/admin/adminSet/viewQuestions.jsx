import QuestionView from "./questionView";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const ViewQuestions = ({ questions }) => {
  return (
    <Container>
      {questions.map((question) => (
        <Row key={question._id}>
          <QuestionView question={question} />
        </Row>
      ))}
    </Container>
  );
};

export default ViewQuestions;
