import React from "react";

import "../../css/components/admin/adminQuestion.css";

const AdminQuestion = ({ question, deleteQuestion }) => {
  if (question.input_type === "multiple-choice") {
    return (
      <div>
        <h3>{question.title}</h3>
        <h5>{question.input_type}</h5>

        <ul>
          {question.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
        <button
          className="small-btn"
          onClick={() => deleteQuestion(question._id)}
        >
          Remove From Set
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
            <li key={option}>{option}</li>
          ))}
        </ul>
        <button
          className="small-btn"
          onClick={() => deleteQuestion(question._id)}
        >
          Remove From Set
        </button>
      </div>
    );
  }
  if (question.input_type === "short-answer") {
    return (
      <div>
        <h3>{question.title}</h3>
        <h5>{question.input_type}</h5>
        <button
          className="small-btn"
          onClick={() => deleteQuestion(question._id)}
        >
          Remove From Set
        </button>
      </div>
    );
  }
  if (question.input_type === "color") {
    return (
      <div>
        <h3>{question.title}</h3>
        <h5>{question.input_type}</h5>
        <button
          className="small-btn"
          onClick={() => deleteQuestion(question._id)}
        >
          Remove From Set
        </button>
      </div>
    );
  }
  return <h3>Error: invalid input type</h3>;
};

export default AdminQuestion;
