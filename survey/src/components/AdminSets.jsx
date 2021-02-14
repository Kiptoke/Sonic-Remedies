import { useState } from "react";
import AdminSet from "./AdminSet";
import AddSet from "./AddSet";

const AdminSets = ({ sets, onDelete, onAddSet }) => {
  const [showAddSet, setShowAddSet] = useState(false);

  const handleClick = () => {
    setShowAddSet(true);
    console.log(showAddSet);
  };
  return (
    <div>
      {sets.map((set) => (
        <AdminSet qid={set.id} set={set} onDelete={onDelete} />
      ))}
      <button onClick={() => handleClick()}>Add Set</button>
      <button>Manage Questions</button>
      {showAddSet && <AddSet onAddSet={onAddSet} />}
    </div>
  );
};

export default AdminSets;
