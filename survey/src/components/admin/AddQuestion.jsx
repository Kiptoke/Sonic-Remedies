import { useState, useEffect } from "react";
import AdminQCheckbox from "./AdminQCheckbox";

const AddQuestion = ({ onAddQuestions, currentQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState([]);

  //get questions
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetch("http://localhost:5000/questions")
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          const filtered = data.filter(
            (question) => !currentQuestions.includes(question._id)
          )
          setQuestions(filtered);
        })
    }
    return () => mounted = false;

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
    <form onSubmit={onSubmit}>
      {questions.map(
        (question) =>
          !currentQuestions.includes(question) && (
            <AdminQCheckbox question={question} addToSelected={addToSelected} key={question._id} />
          )
      )}
      <input type="submit" value="Add Questions" />
    </form>
  );
};

export default AddQuestion;
