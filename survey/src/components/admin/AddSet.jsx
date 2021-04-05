import { useState } from "react";

const AddSet = ({ onAddSet, setShowAddSet }) => {
  const [title, setTitle] = useState("");
  const [musicBool, setMusicBool] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();

    setShowAddSet(false)

    if (!title) {
      alert("Please add a title");
      return;
    }

    onAddSet(title, musicBool);
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
      <div>
        <label><b>Is there music associated with this set?</b></label>
        <div onChange={(e) => {
          if(e.target.value === "yes") {
            setMusicBool(true)
          }
          else {
            setMusicBool(false)
          }
        }}>
          <input type="radio" value="yes" name="option" /> Yes
          <input type="radio" value="No" name="option" /> No
        </div>
      </div>
      
      <input className="submit" type="submit" value="Save Set" />
    </form>
  );
};

export default AddSet;
