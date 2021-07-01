import Card from "react-bootstrap/Card";

const QuetsionView = ({ question, num }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{`${num}. ${question.title}`}</Card.Title>
        <Card.Text>
          {question.config && question.config.condQuestion
            ? "Conditional: " + question.config.condQuestion
            : ""}
        </Card.Text>
        <Card.Text style={{ fontStyle: "italic" }}>
          {question.input_type}
        </Card.Text>
        <Card.Text>
          {question.options.map((opt) => (
            <li key={opt}>{opt}</li>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QuetsionView;
