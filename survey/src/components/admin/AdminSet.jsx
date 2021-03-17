import { useState, useEffect } from "react";

import AdminQuestion from "./AdminQuestion";
import AddQuestion from "./AddQuestion";
import ChangeOrder from "./ChangeOrder";

const AdminSet = ({ set, onDelete }) => {
  const [currentSet, setCurrentSet] = useState(set);
  const [questions, setQuestions] = useState([]);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [showQuestionOrder, setShowQuestionOrder] = useState(false);

  useEffect(() => {
    setQuestions(currentSet.questions);
  }, [currentSet]);

  const deleteQuestion = async (question_id) => {
    const init_res = await fetch(`http://localhost:5000/sets/${set._id}`);
    const data = await init_res.json();
    const new_questions = data.questions.filter(
      (question) => question !== question_id
    );
    const updatedSet = {
      ...data,
      questions: new_questions,
    };

    const stringified = JSON.stringify(updatedSet);

    const res = await fetch(`http://localhost:5000/sets/${set._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: stringified,
    });

    const updated = await res.json();

    setQuestions(updated.questions);
  };

  const displayQuestions = () => {
    setShowAddQuestion(!showAddQuestion);
  };

  const displayChangeOrder = () => {
    setShowQuestionOrder(!showQuestionOrder)
  }

  const onOrderChanged = (ret) => {
    //setShowQuestionOrder(!showQuestionOrder)
    setCurrentSet(ret)
  }

  const onAddQuestions = async (selected) => {
    const init_res = await fetch(`http://localhost:5000/sets/${set._id}`);
    const data = await init_res.json();
    let set_questions = data.questions;

    for (let i = 0; i < selected.length; i++) {
      set_questions.push(selected[i]);
    }

    const res = await fetch(`http://localhost:5000/sets/${set._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...data, questions: set_questions }),
    });
    const updated_data = await res.json();

    setQuestions(updated_data.questions);
    setShowAddQuestion(!showAddQuestion);
  };

  return (
    <div>
      <h1>{set.title}</h1>
      <button onClick={() => onDelete(set._id)}>Delete Set</button>
      <button onClick={() => displayChangeOrder()}>Change Question Order</button>
      {showQuestionOrder && (
        <ChangeOrder set={set} onOrderChanged={onOrderChanged} />
      )}
      {questions.map((question) => (
        <AdminQuestion
          key={question}
          qid={question}
          deleteQuestion={deleteQuestion}
        />
      ))}
      <button onClick={() => displayQuestions()}>Add Questions to Set</button>
      {showAddQuestion && (
        <AddQuestion
          onAddQuestions={onAddQuestions}
          currentQuestions={questions}
        />
      )}
      <hr></hr>
    </div>
  );
};

export default AdminSet;
