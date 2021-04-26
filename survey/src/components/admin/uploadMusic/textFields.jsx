import { useState } from "react";
const inputFields = [
  { name: "Title", example: "Stupid Love" },
  { name: "Artist", example: "Lady Gaga" },
  { name: "Album", example: "Chromatica" },
  { name: "Genre", example: "Pop" },
  { name: "Tempo (bpm)", example: "118" },
];

const TextFields = ({ validator, setFieldsFilled }) => {
  const initErrors = [];
  inputFields.forEach(() => initErrors.push(undefined));
  const [errorMessages, setErrorMessages] = useState(initErrors);
  return (
    <div>
      {inputFields.map((field, i) => (
        <div key={field.name} className="field-container">
          <div className="fc-main">
            <label htmlFor={field.name}>{field.name}</label>
            <input
              required={true}
              type="text"
              name={field.name}
              placeholder={"Ex. " + field.example}
              onChange={(e) => {
                validator(
                  errorMessages,
                  e,
                  setErrorMessages,
                  setFieldsFilled,
                  i
                );
              }}
            ></input>
          </div>
          <p className="fc-err">{errorMessages[i]}</p>
        </div>
      ))}
    </div>
  );
};

export default TextFields;
