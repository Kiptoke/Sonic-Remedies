import { useState } from "react";
import AdminSet from "./AdminSet";
import AddSet from "./AddSet";
import NewQuestion from "./NewQuestion";

import "../../css/components/admin/adminSets.css";

const AdminSets = ({ sets, onDelete, onDuplicate, onAddSet, onNewQuestion, onOrderChanged }) => {
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
        <AdminSet qid={set._id} key={set._id} set={set} onDelete={onDelete} onDuplicate={onDuplicate} 
          onOrderChanged={onOrderChanged} />
      ))}
      <button className="big-btn" onClick={() => handleClick()}>Add Set</button>
      <button className="big-btn" onClick={() => handleManageQuestions()}>Manage Questions</button>
      {showAddSet && <AddSet onAddSet={onAddSet} setShowAddSet={setShowAddSet}/>}
      {showAddQuestion && <NewQuestion onNewQuestion={onNewQuestion} setShowAddQuestion={setShowAddQuestion}/>}
    </div>
  );
};

export default AdminSets;
