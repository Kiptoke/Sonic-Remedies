import { useState, useEffect } from "react";
import AdminQCheckbox from "./AdminQCheckbox";

const AddQuestion = ({ onAddQuestions, currentQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState([]);

  //get questions
  useEffect(() => {
    const getQuestions = async () => {
      const serverQuestions = await fetch("http://localhost:5000/questions");
      const data = await serverQuestions.json();
      const filtered = data.filter(
        (question) => !currentQuestions.includes(question._id)
      );
      setQuestions(filtered);
    };
    getQuestions();
  }, [currentQuestions]);

  const onSubmit = (e) => {
    e.preventDefault();

    onAddQuestions(selected);
  };

  const addToSelected = (id) => {
    let selected_copy = selected;
    if (!selected.includes(id)) {
      selected_copy.push(id);
    } else {
      const index = selected_copy.indexOf(id);
      selected_copy.splice(index, 1);
    }
    setSelected(selected_copy);
    console.log(selected);
  };

  return (
    <form onSubmit={onSubmit}>
      {questions.map(
        (question) =>
          !currentQuestions.includes(question) && (
            <AdminQCheckbox question={question} addToSelected={addToSelected} />
          )
      )}
      <input type="submit" value="Add Questions" />
    </form>
  );
};

export default AddQuestion;
