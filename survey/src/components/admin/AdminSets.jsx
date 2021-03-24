import { useState } from "react";
import AdminSet from "./AdminSet";
import AddSet from "./AddSet";
import NewQuestion from "./NewQuestion";

const AdminSets = ({ sets, onDelete, onAddSet, onNewQuestion, onOrderChanged }) => {
  const [showAddSet, setShowAddSet] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  const handleClick = () => {
    setShowAddSet(!showAddSet);
  };

  const handleManageQuestions = () => {
    setShowAddQuestion(!showAddQuestion);
  };

  return (
    <div>
      {sets.map((set) => (
        <AdminSet qid={set._id} key={set._id} set={set} onDelete={onDelete} onOrderChanged={onOrderChanged} />
      ))}
      <button onClick={() => handleClick()}>Add Set</button>
      <button onClick={() => handleManageQuestions()}>Manage Questions</button>
      {showAddSet && <AddSet onAddSet={onAddSet} />}
      {showAddQuestion && <NewQuestion onNewQuestion={onNewQuestion} />}
    </div>
  );
};

export default AdminSets;
