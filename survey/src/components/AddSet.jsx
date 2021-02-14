import { useState } from "react";

const AddSet = ({ onAddSet }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a title");
      return;
    }

    onAddSet(title);
    setTitle("");
  };
  return (
    <form className="add-set-form" onSubmit={onSubmit}>
      <label>Title</label>
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
