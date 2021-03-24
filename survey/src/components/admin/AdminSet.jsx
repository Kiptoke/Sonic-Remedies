import { useState, useEffect } from "react";

import AdminQuestion from "./AdminQuestion";
import AddQuestion from "./AddQuestion";
import ChangeOrder from "./ChangeOrder";

const AdminSet = ({ set, onDelete, onOrderChanged }) => {
  const [currentSet, setCurrentSet] = useState(set);
  const [questions, setQuestions] = useState([]);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [showQuestionOrder, setShowQuestionOrder] = useState(false);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetch("http://localhost:5000/questions")
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          const filtered = data.filter(
            (question) => currentSet.questions.includes(question._id)
          )
          const sorted = [];
          for (let i = 0; i < currentSet.questions.length; i++) {
            for (let j = 0; j < filtered.length; j++) {
              if (currentSet.questions[i] === filtered[j]._id) {
                sorted.push(filtered[j]);
                break;
              }
            }
          }
          setQuestions(sorted);
          //setWait(false);
        })
    }
    return () => mounted = false;
  }, [currentSet.questions]);

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

    setCurrentSet(updated);
  };

  const displayQuestions = () => {
    setShowAddQuestion(!showAddQuestion);
  };

  const displayChangeOrder = () => {
    setShowQuestionOrder(!showQuestionOrder)
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

    setCurrentSet(updated_data);
    setShowAddQuestion(!showAddQuestion);
  };

  const onDragEnd = (result) => {
    onOrderChanged(result, set._id)
  }



  return (
    <div>
      <h1 className="set-title">{set.title}</h1>
      <button onClick={() => onDelete(set._id)}>Delete Set</button>
      <button onClick={() => displayChangeOrder()}>Change Question Order</button>
      {showQuestionOrder && (
        <ChangeOrder wait={wait} curquestions={questions} onDragEnd={onDragEnd} />
      )}
      {questions.map((question) => (
        <AdminQuestion
          key={question._id}
          qid={question._id}
          deleteQuestion={deleteQuestion}
        />
      ))}
      <button onClick={() => displayQuestions()}>Add Questions to Set</button>
      {showAddQuestion && (
        <AddQuestion
          onAddQuestions={onAddQuestions}
          currentQuestions={currentSet.questions}
        />
      )}
      <hr></hr>
    </div>
  );
};

export default AdminSet;
