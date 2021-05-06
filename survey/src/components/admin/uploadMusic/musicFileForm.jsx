import { useState } from "react";
import { checkFileInput, checkTextInput } from "./musicInputValidation";
import TextFields from "./textFields";
import YesNoFields from "./yesNoFields";
import SliderFields from "./sliderFields";
import PrevailKeyField from "./prevailKeyField";

const MusicFileForm = () => {
  const [fileReadyToUpload, setFileReadyToUpload] = useState(false);
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const [fileValidationError, setFileValidationError] = useState("");
  const [submission, setSubmission] = useState({
    prevailingKey: "N/A",
    improvisation: 0,
    consistent_vibe: false,
  });
  const updateSubParam = (pairs) => {
    let temp_submission = { ...submission };
    for (const [key, value] of Object.entries(pairs)) {
      temp_submission[key] = value;
    }
    setSubmission(temp_submission);
  };
  const submitForm = () => {
    console.log(submission);
  };
  return (
    <form>
      <input
        required={true}
        type="file"
        onInput={(e) => {
          checkFileInput(e, setFileValidationError, setFileReadyToUpload);
        }}
      />
      <p>{fileValidationError}</p>
      <TextFields
        validator={checkTextInput}
        setFieldsFilled={setFieldsFilled}
        sendFields={(value) => updateSubParam(value)}
      />
      <PrevailKeyField
        setPrevailingKey={(value) => updateSubParam({ prevailingKey: value })}
      />
      <SliderFields
        setField={(value) => updateSubParam({ improvisation: value })}
      />
      <YesNoFields
        setField={(value) => updateSubParam({ consistent_vibe: value })}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          submitForm();
        }}
        style={fileReadyToUpload && fieldsFilled ? {} : { display: "none" }}
      >
        Submit
      </button>
    </form>
  );
};

export default MusicFileForm;
