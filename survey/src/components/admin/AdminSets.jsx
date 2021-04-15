import { useState } from "react";
import AdminSet from "./AdminSet";
import AddSet from "./AddSet";
import NewQuestion from "./NewQuestion";
import ChangeOrder from "./ChangeOrder";

import "../../css/components/admin/adminSets.css";

const AdminSets = ({ sets, onDelete, onDuplicate, onAddSet, onNewQuestion, onOrderChanged }) => {
  const [showAddSet, setShowAddSet] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [showChangeOrder, setShowChangeOrder] = useState(false);

  const handleClick = () => {
    setShowAddSet(!showAddSet);
  };

  const handleManageQuestions = () => {
    setShowAddQuestion(!showAddQuestion);
  };

  const handleChangeOrder = () => {
    setShowChangeOrder(!showChangeOrder)
  }

  const onChangeOrder = (sets) => {
    setShowChangeOrder(false)
    onOrderChanged(sets)
  }


  return (
    <div>
      {sets.map((set) => (
        <AdminSet qid={set._id} key={set._id} set={set} onDelete={onDelete} onDuplicate={onDuplicate}
          onOrderChanged={onOrderChanged} />
      ))}
      <button className="big-btn" onClick={() => handleClick()}>Add Set</button>
      <button className="big-btn" onClick={() => handleChangeOrder()}>Change Set Order</button>
      <button className="big-btn" onClick={() => handleManageQuestions()}>Manage Questions</button>
      {showAddSet && <AddSet onAddSet={onAddSet} setShowAddSet={setShowAddSet} />}
      {showAddQuestion && <NewQuestion onNewQuestion={onNewQuestion} setShowAddQuestion={setShowAddQuestion} />}
      {showChangeOrder && <ChangeOrder curquestions={sets} onChangeOrder={onChangeOrder} />}
    </div>
  );
};

export default AdminSets;
