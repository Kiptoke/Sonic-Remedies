import "../../../css/components/freeResponse.scss";
import { useState, useEffect } from "react";
import Joi from "joi";
import { onOpenKB, onCloseKB } from "../../../utils/mobileKeyboard";

const schema = Joi.object({
  textfield: Joi.string().min(2).max(300).required().label("Answer"),
});

function verifyInput(evt, setResponse, setValidationError) {
  const input = evt.target.value;
  const { error } = schema.validate({ textfield: input });
  if (!error) {
    setResponse(input);
    setValidationError("");
  } else {
    setResponse(null);
    setValidationError(error.message);
  }
}

const FreeResponse = ({ handleResponded, config }) => {
  const maxLength = config ? config.maxLength : undefined;
  const [response, setResponse] = useState(null);
  const [validationError, setValidationError] = useState("");
  useEffect(() => {
    handleResponded(response);
  }, [handleResponded, response]);
  return (
    <div className="question-fr">
      <textarea
        maxLength={maxLength ? maxLength : 25}
        rows="6"
        placeholder="Write your answer here"
        onTouchEnd={onOpenKB}
        onMouseLeave={onCloseKB}
        onChange={(evt) => verifyInput(evt, setResponse, setValidationError)}
      />
      <div className="error">{validationError}</div>
    </div>
  );
};

export default FreeResponse;
