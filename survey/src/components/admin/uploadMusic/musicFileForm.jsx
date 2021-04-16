import { useState } from "react";
import { checkFileInput, checkTextInput } from "./musicInputValidation";
import TextFields from "./textFields";
import ImprovisationField from "./improvisationField";

const MusicFileForm = () => {
  const [fileReadyToUpload, setFileReadyToUpload] = useState(false);
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const [boxTicked, setBoxTicked] = useState(false);
  const [fileValidationError, setFileValidationError] = useState("");
  return (
    <form>
      <input
        type="file"
        onInput={(e) => {
          checkFileInput(e, setFileValidationError, setFileReadyToUpload);
        }}
      />
      <p>{fileValidationError}</p>
      <TextFields
        validator={checkTextInput}
        setFieldsFilled={setFieldsFilled}
      />
      <ImprovisationField setBoxTicked={setBoxTicked} />
      <input
        type="submit"
        style={
          fileReadyToUpload && fieldsFilled && boxTicked
            ? {}
            : { display: "none" }
        }
      ></input>
    </form>
  );
};

export default MusicFileForm;
