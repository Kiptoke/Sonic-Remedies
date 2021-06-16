import { useState } from "react";
import API from "../../../services/api-client";

const DeleteQuestion = ({
  allQuestions,
  setAllQuestions,
  sets,
  setSets,
  onDeleteQuestion,
}) => {
  let mySets = sets;
  const [toDelete, setToDelete] = useState([]);

  const deleteQuestions = async (e) => {
    e.preventDefault();
    if (window.confirm("Delete these questions?")) {
      setAllQuestions(allQuestions.filter((q) => !toDelete.includes(q._id)));
      onDeleteQuestion();
      // let sets = await API.getAll("sets");
      //deletes questions from any set
      for (let i = 0; i < toDelete.length; i++) {
        for (let j = 0; j < mySets.length; j++) {
          for (let k = 0; k < mySets[j].questions.length; k++) {
            if (mySets[j].questions[k] === toDelete[i]) {
              mySets[j].questions.splice(k, 1);
              API.putOne("sets", mySets[j]._id, mySets[j]);
            }
          }
        }
      }
      setSets(mySets);

      //delete each question in array
      for (let i = 0; i < toDelete.length; i++) {
        await API.deleteOne("questions", toDelete[i]);
      }
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
      {allQuestions.map((question) => {
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
