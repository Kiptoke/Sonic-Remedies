import React from "react";
import { useState, useEffect } from "react";

const AdminQuestion = ({ qid, deleteQuestion }) => {
  const [question, setQuestion] = useState({});

  useEffect(() => {
    console.log(qid);
    fetch(`http://localhost:5000/questions/${qid}`)
      .then((response) => response.json())
      .then((json) => {
        setQuestion(json);
      });
  }, [qid]);

  console.log(question);

  if (question.input_type === "multiple-choice") {
    return (
      <div>
        <h3>{question.title}</h3>
        <h5>{question.input_type}</h5>

        <ul>
          {question.options.map((option) => (
            <li>{option}</li>
          ))}
        </ul>
        <button onClick={() => deleteQuestion(question._id)}>
          Delete Question
        </button>
      </div>
    );
  }
  if (question.input_type === "check-box") {
    return (
      <div>
        <h3>{question.title}</h3>
        <h5>{question.input_type}</h5>
        <ul>
          {question.options.map((option) => (
            <li>{option}</li>
          ))}
        </ul>
        <button onClick={() => deleteQuestion(question._id)}>
          Delete Question
        </button>
      </div>
    );
  }
  if (question.input_type === "short-answer") {
    return (
      <div>
        <h3>{question.title}</h3>
        <h5>{question.input_type}</h5>
        <button onClick={() => deleteQuestion(question._id)}>
          Delete Question
        </button>
      </div>
    );
  }
  if (question.input_type === "long-answer") {
    return (
      <div>
        <h3>{question.title}</h3>
        <h5>{question.input_type}</h5>
        <button onClick={() => deleteQuestion(question._id)}>
          Delete Question
        </button>
      </div>
    );
  }
  return <h3>Error: invalid input type</h3>;
};

export default AdminQuestion;
