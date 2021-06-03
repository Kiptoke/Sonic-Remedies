import { useState } from "react";
import AdminSet from "./AdminSet";
import AddSet from "./AddSet";
import NewQuestion from "./NewQuestion";
import ChangeOrder from "./ChangeOrder";
import DeleteQuestion from "./DeleteQuestion";

import "../../css/components/admin/adminSets.css";

const AdminSets = ({
  sets,
  onDelete,
  onDuplicate,
  onAddSet,
  onNewQuestion,
  onOrderChanged,
}) => {
  const [showAddSet, setShowAddSet] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [showChangeOrder, setShowChangeOrder] = useState(false);
  const [deleteQuestions, setDeleteQuestions] = useState(false);

  const handleClick = () => {
    setShowAddSet(!showAddSet);
  };

  const handleManageQuestions = () => {
    setShowAddQuestion(!showAddQuestion);
  };

  const handleChangeOrder = () => {
    setShowChangeOrder(!showChangeOrder);
  };

  const onChangeOrder = (sets) => {
    setShowChangeOrder(false);
    onOrderChanged(sets);
  };

  const handleDeleteQuestion = () => {
    setDeleteQuestions(!deleteQuestions);
  };

  return (
    <div className="admin-sets">
      <div className="modify-whole">
        <h1>Modify as a Whole:</h1>
        <button className="big-btn" onClick={() => handleClick()}>
          {showAddSet ? "Go Back" : "Create New Set"}
        </button>
        <button className="big-btn" onClick={() => handleChangeOrder()}>
          {showChangeOrder ? "Go Back" : "Change Set Order"}
        </button>
        <button className="big-btn" onClick={() => handleManageQuestions()}>
          {showAddQuestion ? "Go Back" : "Create New Question"}
        </button>
        <button className="big-btn" onClick={() => handleDeleteQuestion()}>
          {deleteQuestions ? "Go Back" : "Delete a Question"}
        </button>
        {showAddSet && (
          <AddSet onAddSet={onAddSet} setShowAddSet={setShowAddSet} />
        )}
        {showAddQuestion && (
          <NewQuestion
            onNewQuestion={onNewQuestion}
            setShowAddQuestion={setShowAddQuestion}
          />
        )}
        {showChangeOrder && (
          <ChangeOrder curquestions={sets} onChangeOrder={onChangeOrder} />
        )}
        {deleteQuestions && (
          <DeleteQuestion handleDeleteQuestion={handleDeleteQuestion} />
        )}
      </div>
      <div className="modify-parts">
        <h1>View/Modify Individual Sets:</h1>
        <div className="sets">
          {sets.map((set) => (
            <AdminSet
              qid={set._id}
              key={set._id}
              set={set}
              onDelete={onDelete}
              onDuplicate={onDuplicate}
              onOrderChanged={onOrderChanged}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSets;
