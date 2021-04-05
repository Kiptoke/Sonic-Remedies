import { useState } from "react";

const AddSet = ({ onAddSet, setShowAddSet }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setShowAddSet(false)

    if (!title) {
      alert("Please add a title");
      return;
    }

    onAddSet(title);
    setTitle("");
  };
  return (
    <form className="add-set-form" onSubmit={onSubmit}>
      <h4>New Set</h4>
      <label><b>Title: </b></label>
      <input
        type="text"
        placeholder="Add Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="Save Set" />
    </form>
  );
};

export default AddSet;
