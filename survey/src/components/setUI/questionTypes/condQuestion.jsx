import MultipleChoice from "./multipleChoice";
import NextButton from "../nextButton";
import { useState } from "react";

const CondQuestion = ({ question, handleYes, handleClickedNext }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div>
      <h1>{question}</h1>
      <MultipleChoice
        responses={["Yes", "No"]}
        handleResponded={(response) => {
          if (response === 1) {
            setRevealed(true);
          } else if (response === 0) {
            setRevealed(false);
            handleYes();
          }
        }}
      />
      <div className="next">
        <NextButton revealNext={revealed} handleClicked={handleClickedNext} />
      </div>
    </div>
  );
};

export default CondQuestion;
