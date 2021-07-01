import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import MaxLengthSelect from "./maxLengthSelect";

const NewQuestion = ({ onNewQuestion, allQuestions }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("multiple-choice");
  const [options, setOptions] = useState("");
  const [config, setConfig] = useState({});

  const questionTypes = [
    {
      name: "Multiple Choice",
      value: "multiple-choice",
      description:
        "User selects one option from several. Does not provide None of the Above option. It must be entered as an option if desired.",
    },
    {
      name: "Checkbox",
      value: "check-box",
      description:
        "User selects as many options as apply to them. None of the Above response option is built-in and not necessary to specify.",
    },
    {
      name: "Short Answer",
      value: "short-answer",
      description: "User writes a response with the specified word maximum.",
    },
    {
      name: "Color",
      value: "color",
      description:
        "User answers Yes/No to the question then chooses a color if answered yes. Example question: Do you have a favorite color?",
    },
    {
      name: "Likert",
      value: "slider",
      description:
        "User disagrees or agrees with the provided statement on a scale of 1 to 5. Example statement: I am excited to hear this music.",
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    if (allQuestions.filter((q) => q.title === title).length > 0) {
      alert(
        "There is already a question like that. Please change the question"
      );
      return;
    }
    if (!title) {
      alert("Please enter a question");
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
    onNewQuestion(title, type, options, config);
  };

  return (
    <form className="new-question-form" onSubmit={onSubmit}>
      <label>
        <b>Conditional question (optional):</b>
      </label>
      <input
        type="text"
        placeholder="Conditional Question Here..."
        onChange={(e) => {
          let temp_config = config;
          temp_config["condQuestion"] = e.target.value;
          setConfig(temp_config);
        }}
      />
      <br />
      <Alert variant="info">
        {
          "The conditional question is used if you would like a Yes/No response before the question. Ex: Do you have synesthesia? (if Yes) Do you associate a color with this piece?"
        }
      </Alert>
      <br />
      <label>
        <b>Enter Question: </b>
      </label>
      <input
        type="text"
        placeholder="Ask Here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>
        <b>Question Type: </b>
      </label>
      <div onChange={(e) => setType(e.target.value)}>
        {questionTypes.map((qtype) => (
          <div key={qtype.value}>
            <input
              type="radio"
              value={qtype.value}
              name="option"
              defaultChecked={qtype.value === "multiple-choice"}
            />
            <label htmlFor={qtype.value}>{qtype.name}</label>
            {qtype.value === type && (
              <Alert variant="info">{qtype.description}</Alert>
            )}
          </div>
        ))}
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
      {type === "short-answer" && (
        <MaxLengthSelect config={config} setConfig={setConfig} />
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
