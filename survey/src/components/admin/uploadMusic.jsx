import "../../css/components/admin/uploadMusic.scss";
import Joi from "joi";
import { useState } from "react";

const schema = Joi.object({
  filename: Joi.string().pattern(/.+.(mp3)$/),
});
const checkInput = (input, setValidationError, setReadyToUpload) => {
  const files = input.target.files;
  let failed = false;
  if (files.length === 0) {
    setReadyToUpload(false);
    setValidationError("");
    return;
  }
  for (let i = 0; i < files.length; i++) {
    const filename = files[i].name;
    const { error } = schema.validate({ filename: filename });
    if (!error) {
      setValidationError("");
    } else {
      setValidationError(filename + " is not a valid file format.");
      failed = true;
    }
  }
  if (!failed) setReadyToUpload(true);
  else {
    setReadyToUpload(false);
  }
};
const UploadMusic = () => {
  const [validationError, setValidationError] = useState("");
  const [readyToUpload, setReadyToUpload] = useState(false);
  return (
    <div className="upload-music">
      <h1>Upload a music file or multiple music files.</h1>
      <h2>Note: Only mp3 files are supported</h2>
      <input
        type="file"
        multiple
        onInput={(e) => {
          checkInput(e, setValidationError, setReadyToUpload);
        }}
      />
      <p>{validationError}</p>
      <button style={!readyToUpload ? { display: "none" } : {}}>Upload</button>
    </div>
  );
};
export default UploadMusic;
