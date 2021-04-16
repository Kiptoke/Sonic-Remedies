import { useState } from "react";
const inputFields = [
  { name: "Title", example: "Stupid Love" },
  { name: "Artist", example: "Lady Gaga" },
  { name: "Album", example: "Chromatica" },
  { name: "Genre", example: "Pop" },
  { name: "Tempo (bpm)", example: "118" },
  { name: "Prevailing Key", example: "Ab Major" },
  { name: "Consistent Vibe", example: "Dance Party" },
];

const TextFields = ({ validator, setFieldsFilled }) => {
  const [errorMessages, setErrorMessages] = useState([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  return (
    <div className="text-fields">
      {inputFields.map((field, i) => (
        <div>
          <div className="text-field">
            <label for={field.name}>{field.name}</label>
            <input
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
          <p>{errorMessages[i]}</p>
        </div>
      ))}
    </div>
  );
};

export default TextFields;
