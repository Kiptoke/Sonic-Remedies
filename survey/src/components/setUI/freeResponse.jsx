import "../../css/components/freeResponse.scss";
import { useState, useEffect } from "react";
import Joi from "joi";
import { onOpenKB, onCloseKB } from "../../utils/mobileKeyboard";

const schema = Joi.object({
  textfield: Joi.string().min(3).max(350).required().label("Answer"),
});

function verifyInput(evt, setResponded, setValidationError) {
  const input = evt.target.value;
  const { error } = schema.validate({ textfield: input });
  if (!error) {
    setResponded(true);
    setValidationError("");
  } else {
    setResponded(false);
    setValidationError(error.message);
  }
}

const FreeResponse = ({ responses, handleResponded }) => {
  const [responded, setResponded] = useState(false);
  const [validationError, setValidationError] = useState("");
  useEffect(() => {
    if (responded) {
      handleResponded(true);
    } else {
      handleResponded(false);
    }
  }, [handleResponded, responded]);
  return (
    <div className="question-fr">
      <textarea
        maxLength="350"
        rows="6"
        placeholder="Write your answer here"
        onTouchEnd={onOpenKB}
        onMouseLeave={onCloseKB}
        onChange={(evt) => verifyInput(evt, setResponded, setValidationError)}
      />
      <div className="error">{validationError}</div>
    </div>
  );
};

export default FreeResponse;
