import { useState, useEffect } from "react";
import AdminQCheckbox from "./AdminQCheckbox";
import API from "../../services/api-client";

const AddQuestion = ({ onAddQuestions, currentQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState([]);

  //get questions
  useEffect(() => {
    let mounted = true;
    const fetchQuestions = async () => {
      const data = await API.getAll("questions");
      const filtered = data.filter(
        (question) => !currentQuestions.includes(question._id)
      );
      setQuestions(filtered);
    };

    if (mounted) {
      fetchQuestions();
    }
    return () => (mounted = false);
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
  };

  return (
    <form className="add-question-form" onSubmit={onSubmit}>
      {questions.map(
        (question) =>
          !currentQuestions.includes(question) && (
            <AdminQCheckbox
              question={question}
              addToSelected={addToSelected}
              key={question._id}
            />
          )
      )}
      <input type="submit" value="Confirm" />
    </form>
  );
};

export default AddQuestion;
