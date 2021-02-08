import React from "react";
import { useState, useEffect } from "react";

const AdminQuestion = ({ qid }) => {
  const [question, setQuestion] = useState({});

  useEffect(() => {
    console.log(qid);
    fetch(`http://localhost:5000/questions/${qid}`)
      .then((response) => response.json())
      .then((json) => {
        setQuestion(json);
      });
  }, [qid]);

  return (
    <div>
      <h3>{question.title}</h3>
    </div>
  );
};

export default AdminQuestion;
