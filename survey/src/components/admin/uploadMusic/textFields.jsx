import { useState } from "react";
const inputFields = [
  { name: "title", readable: "Title", example: "Stupid Love" },
  { name: "artist", readable: "Artist", example: "Lady Gaga" },
  { name: "album", readable: "Album", example: "Chromatica" },
  { name: "genre", readable: "Genre", example: "Pop" },
  { name: "tempo", readable: "Tempo (bpm)", example: "118" },
];

const TextFields = ({ validator, setFieldsFilled, sendFields }) => {
  const initErrors = [];
  inputFields.forEach(() => initErrors.push(undefined));
  const [errorMessages, setErrorMessages] = useState(initErrors);
  const [fields, setFields] = useState({});
  return (
    <div>
      {inputFields.map((field, i) => (
        <div key={field.name} className="field-container">
          <div className="fc-main">
            <label htmlFor={field.name}>{field.readable}</label>
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
                let temp_fields = { ...fields };
                temp_fields[field.name] = e.target.value;
                setFields(temp_fields);
                sendFields(temp_fields);
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
