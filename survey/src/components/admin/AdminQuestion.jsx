import React from "react";
import { Button } from "react-bootstrap";

const AdminQuestion = ({ question, deleteQuestion }) => {
  switch (question.input_type) {
    default:
      return <h3>Error: invalid input type</h3>;
    case "multiple-choice":
      return (
        <div>
          <h3>{question.title}</h3>
          <h5>{question.input_type}</h5>

          <ul>
            {question.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
          <Button
            className="small-btn"
            onClick={() => deleteQuestion(question._id)}
          >
            Remove From Set
          </Button>
        </div>
      );
    case "check-box":
      return (
        <div>
          <h3>{question.title}</h3>
          <h5>{question.input_type}</h5>
          <ul>
            {question.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
          <Button
            className="small-btn"
            onClick={() => deleteQuestion(question._id)}
          >
            Remove From Set
          </Button>
        </div>
      );
    case "short-answer":
      return (
        <div>
          <h3>{question.title}</h3>
          <h5>{question.input_type}</h5>
          <Button
            className="small-btn"
            onClick={() => deleteQuestion(question._id)}
          >
            Remove From Set
          </Button>
        </div>
      );
    case "color":
      return (
        <div>
          <h3>{question.title}</h3>
          <h5>{question.input_type}</h5>
          <Button
            className="small-btn"
            onClick={() => deleteQuestion(question._id)}
          >
            Remove From Set
          </Button>
        </div>
      );
    case "slider":
      return (
        <div>
          <h3>{question.title}</h3>
          <h5>{question.input_type}</h5>
          <Button
            className="small-btn"
            onClick={() => deleteQuestion(question._id)}
          >
            Remove From Set
          </Button>
        </div>
      );
  }
};

export default AdminQuestion;
