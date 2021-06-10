import { Row, Button, Container, Alert } from "react-bootstrap";
import { useState } from "react";

const checkInput = (input, value, setAlert, setInput) => {
  if (value === "") {
    setAlert("Name cannot be empty.");
  } else {
    setAlert("Good to go!");
    setInput({ title: value, music: input.music });
  }
};

const NewSet = ({ onAddSet }) => {
  const [alert, setAlert] = useState("Name cannot be empty.");
  const [input, setInput] = useState({ title: null, music: true });
  return (
    <Container>
      <Row>
        <label htmlFor="set-name">Set Name:</label>
        <input
          onChange={(e) =>
            checkInput(input, e.target.value, setAlert, setInput)
          }
        />
        <Alert variant={alert === "Good to go!" ? "success" : "danger"}>
          {alert}
        </Alert>
      </Row>
      <Row>
        <label htmlFor="set-music">Has Music:</label>
        <input
          onChange={(e) => {
            setInput({ title: input.title, music: !input.music });
          }}
          type="checkbox"
          className="align-self-center"
          defaultChecked
        />
      </Row>
      <Row>
        <Button
          disabled={alert !== "Good to go!"}
          onClick={() => onAddSet(input.title, input.music)}
        >
          Create
        </Button>
      </Row>
    </Container>
  );
};

export default NewSet;
