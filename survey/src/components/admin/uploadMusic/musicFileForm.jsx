import { useState } from "react";
import { checkTextInput } from "./musicInputValidation";
import TextFields from "./textFields";
import YesNoFields from "./yesNoFields";
import SliderFields from "./sliderFields";
import PrevailKeyField from "./prevailKeyField";
import submitMusic from "./submitMusic";
import getDuration from "./getDuration";
import Button from "react-bootstrap/Button";

const MusicFileForm = () => {
  const [fileReadyToUpload, setFileReadyToUpload] = useState(false);
  const [loadingFile, setLoadingFile] = useState("");
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const [fileValidationError, setFileValidationError] = useState("");
  const [file, setFile] = useState(null);
  const [submission, setSubmission] = useState({
    prevailingKey: "N/A",
    improvisation: 0,
    consistent_vibe: false,
  });
  const [duration, setDuration] = useState(null);
  const updateSubParam = (pairs) => {
    let temp_submission = { ...submission };
    for (const [key, value] of Object.entries(pairs)) {
      temp_submission[key] = value;
    }
    setSubmission(temp_submission);
  };
  return (
    <form>
      <input
        required={true}
        type="file"
        onInput={(e) => {
          getDuration(
            e,
            (value) => setDuration(value),
            setFileValidationError,
            setFileReadyToUpload,
            setFile,
            setLoadingFile
          );
        }}
        accept={"audio/mp3"}
      />
      <p className="err">{fileValidationError}</p>
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
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log({ ...submission, duration });
          if (window.confirm("Are you sure you want to submit this?")) {
            submitMusic({ ...submission, duration }, file);
          }
        }}
        disabled={!fileReadyToUpload || !fieldsFilled || !duration}
      >
        Submit
      </Button>
      <p style={{ color: "red" }}>{loadingFile}</p>
    </form>
  );
};

export default MusicFileForm;
