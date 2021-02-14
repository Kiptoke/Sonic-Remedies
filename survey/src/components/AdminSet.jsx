import { useState, useEffect } from "react";

import AdminQuestion from "./AdminQuestion";

const AdminSet = ({ set, onDelete }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(set.questions);
  }, [set.questions]);

  const deleteQuestion = async (question_id) => {
    const init_res = await fetch(`http://localhost:5000/sets/${set.id}`);
    const data = await init_res.json();
    console.log(question_id);
    const new_questions = data.questions.filter(
      (question) => question !== question_id
    );
    console.log(new_questions);
    const updatedSet = {
      ...data,
      questions: new_questions,
    };

    const stringified = JSON.stringify(updatedSet);
    console.log(stringified);

    const res = await fetch(`http://localhost:5000/sets/${set.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: stringified,
    });

    const updated = await res.json();
    console.log(updated);

    setQuestions(updated.questions);
  };

  return (
    <div>
      <h1>{set.title}</h1>
      <button onClick={() => onDelete(set.id)}>Delete Set</button>
      {questions.map((question) => (
        <AdminQuestion
          key={question}
          qid={question}
          deleteQuestion={deleteQuestion}
        />
      ))}
      <button>Add Question to Set</button>
      <hr></hr>
    </div>
  );
};

export default AdminSet;
