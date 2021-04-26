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
      />
      <PrevailKeyField />
      <SliderFields />
      <YesNoFields />
      <input
        type="submit"
        style={fileReadyToUpload && fieldsFilled ? {} : { display: "none" }}
      ></input>
    </form>
  );
};

export default MusicFileForm;
