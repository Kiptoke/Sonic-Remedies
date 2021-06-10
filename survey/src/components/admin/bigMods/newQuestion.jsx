import { useState } from "react";

const NewQuestion = ({ onNewQuestion }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [options, setOptions] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please add a title");
      return;
    }
    if (!type) {
      alert("Please select a question type");
      return;
    }
    if (
      (type === "multiple-choice" && !options) ||
      (type === "check-box" && !options)
    ) {
      alert("Please add options for multiple choice and checkbox questions");
      return;
    }
    onNewQuestion(title, type, options);
  };

  return (
    <form className="new-question-form" onSubmit={onSubmit}>
      <label>
        <b>Enter Question: </b>
      </label>
      <input
        type="text"
        placeholder="Ask Here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br></br>
      <label>
        <b>Question Type: </b>
      </label>
      <div onChange={(e) => setType(e.target.value)}>
        <input type="radio" value="multiple-choice" name="option" /> Multiple
        Choice
        <input type="radio" value="check-box" name="option" /> Checkbox
        <input type="radio" value="short-answer" name="option" /> Short Answer
        <input type="radio" value="color" name="option" /> Color
        <input type="radio" value="slider" name="option" /> Slider
      </div>
      {(type === "multiple-choice" || type === "check-box") && (
        <label>Options (please separate each option with a semicolon)</label>
      )}
      {(type === "multiple-choice" || type === "check-box") && (
        <input
          type="text"
          placeholder="options"
          value={options}
          onChange={(e) => setOptions(e.target.value)}
        />
      )}
      <input
        className="submit btn btn-primary"
        type="submit"
        value="Create New Question"
      />
    </form>
  );
};

export default NewQuestion;
