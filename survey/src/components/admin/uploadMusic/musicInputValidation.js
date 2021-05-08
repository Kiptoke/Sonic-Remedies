import Joi from "joi";

const schema = Joi.object({
  filename: Joi.string().pattern(/.+.(mp3)$/),
  textfield: Joi.string().max(30),
  number: Joi.number().max(1000).min(1),
});
const checkFileInput = (input, setValidationError, setReadyToUpload) => {
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
const checkTextInput = (
  errors,
  input,
  setValidationError,
  setFieldsFilled,
  i,
  type
) => {
  const temp_errors = [...errors];
  const text = input.target.value;
  const { error } =
    type === "number"
      ? schema.validate({ number: text })
      : schema.validate({ textfield: text });
  if (!error) {
    temp_errors[i] = "";
    setValidationError(temp_errors);
    let complete = true;
    temp_errors.forEach((err) => {
      if (err || err === undefined) complete = false;
    });
    setFieldsFilled(complete);
  }
  if (error) {
    temp_errors[i] = input.target.name + " " + error.message.split('"')[2];
    setValidationError(temp_errors);
    setFieldsFilled(false);
  }
};

export { checkFileInput, checkTextInput };
