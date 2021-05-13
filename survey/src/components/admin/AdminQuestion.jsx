import React from "react";

import "../../css/components/admin/adminQuestion.css";

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
          <button
            className="small-btn"
            onClick={() => deleteQuestion(question._id)}
          >
            Remove From Set
          </button>
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
          <button
            className="small-btn"
            onClick={() => deleteQuestion(question._id)}
          >
            Remove From Set
          </button>
        </div>
      );
    case "short-answer":
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
    case "color":
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
    case "slider":
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
};

export default AdminQuestion;
