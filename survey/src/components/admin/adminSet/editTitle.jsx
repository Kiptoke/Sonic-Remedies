import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";

const checkInput = (input, value, setAlert, setInput) => {
  if (value === "") {
    setAlert("Name cannot be empty.");
  } else {
    setAlert("Good to go!");
    setInput(value);
  }
};

const EditTitle = ({ old, onEditTitle, setEditingTitle, id, index }) => {
  const [alert, setAlert] = useState("Good to go!");
  const [name, setName] = useState(old);

  return (
    <form>
      <label htmlFor="title">New Name: </label>
      <input
        onChange={(e) => checkInput(name, e.target.value, setAlert, setName)}
        className="form-control"
        id="title"
        defaultValue={old}
      />
      <Alert variant={alert === "Good to go!" ? "success" : "danger"}>
        {alert}
      </Alert>
      <Button
        disabled={alert !== "Good to go!"}
        onClick={() => {
          onEditTitle(id, name, index);
          setEditingTitle(false);
        }}
      >
        Confirm
      </Button>
    </form>
  );
};

export default EditTitle;
