import { useState } from "react";

const AdminQCheckbox = ({ question, addToSelected }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    addToSelected(question._id);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={question.title}
          checked={checked}
          onChange={() => handleChange(question._id)}
        />
      </label>
      {question.title}
    </div>
  );
};

export default AdminQCheckbox;
