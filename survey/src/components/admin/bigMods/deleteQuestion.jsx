import { useState, useEffect } from "react";
import API from "../../../services/api-client";

const DeleteQuestion = ({ onDeleteQuestion }) => {
  const [questions, setQuestions] = useState([]);
  const [toDelete, setToDelete] = useState([]);

  useEffect(() => {
    //get all questions in db
    const getQuestions = async () => {
      const serverQuestions = await API.getAll("questions");
      setQuestions(serverQuestions);
    };
    getQuestions();
  }, []);

  const deleteQuestions = async (e) => {
    e.preventDefault();
    var retval = window.confirm("Delete these questions?");
    if (retval === true) {
      const sets = await API.getAll("sets");

      //deletes questions from any set
      for (let i = 0; i < toDelete.length; i++) {
        for (let j = 0; j < sets.length; j++) {
          for (let k = 0; k < sets[j].questions.length; k++) {
            if (sets[j].questions[k] === toDelete[i]) {
              sets[j].questions.splice(k, 1);
              await API.putOne("sets", sets[j]._id, sets[j]);
            }
          }
        }
      }

      //delete each question in array
      for (let i = 0; i < toDelete.length; i++) {
        await API.deleteOne("questions", toDelete[i]);
      }
      onDeleteQuestion();
    }
  };

  const handleCheckbox = (val) => {
    let toDeleteCopy = [];
    for (let i = 0; i < toDelete.length; i++) {
      toDeleteCopy.push(toDelete[i]);
    }

    for (let i = 0; i < toDeleteCopy.length; i++) {
      if (val === toDelete[i]) {
        toDeleteCopy.splice(i, 1);
        setToDelete(toDeleteCopy);
        return;
      }
    }
    toDeleteCopy.push(val);
    setToDelete(toDeleteCopy);
  };

  return (
    <form onSubmit={deleteQuestions}>
      {questions.map((question) => {
        return (
          <div
            key={question.title}
            onChange={(e) => {
              handleCheckbox(e.target.value);
            }}
          >
            <input type="checkbox" value={question._id} name="question" />
            {question.title}
          </div>
        );
      })}
      <input
        className="submit btn btn-primary"
        type="submit"
        value="Delete Selected Questions"
      />
    </form>
  );
};

export default DeleteQuestion;
