import { useState } from "react";
const keyNames = ["A", "B", "C", "D", "E", "F", "G", "N/A"];
const keyQualities = [
  "Major",
  "Minor",
  "Dorian",
  "Phrygian",
  "Lydian",
  "Mixolydian",
  "Locrian",
];

const PrevailKeyField = () => {
  const [keySelected, setKeySelected] = useState(false);
  const [flatChecked, setFlatChecked] = useState(false);
  const [sharpChecked, setSharpChecked] = useState(false);
  return (
    <div className="field-container">
      <div className="fc-main">
        <label htmlFor="Prevailing Key">Prevailing Key</label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "",
            minWidth: "55%",
          }}
        >
          <select
            defaultValue={"N/A"}
            name="Prevailing Key"
            onChange={(e) => {
              e.target.value !== "N/A"
                ? setKeySelected(true)
                : setKeySelected(false);
            }}
          >
            {keyNames.map((keyName) => (
              <option key={keyName} value={keyName}>
                {keyName}
              </option>
            ))}
          </select>
          {keySelected ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                marginTop: "0.5rem",
              }}
            >
              <div
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <label htmlFor="♯">♯</label>
                <input
                  style={{ width: "1rem" }}
                  type="checkbox"
                  name="♯"
                  disabled={flatChecked}
                  onChange={() => setSharpChecked(!sharpChecked)}
                />
              </div>
              <div style={{ marginRight: "0.5rem" }}>
                <label htmlFor="♭">♭</label>
                <input
                  style={{ width: "1rem" }}
                  type="checkbox"
                  name="♭"
                  disabled={sharpChecked}
                  onClick={() => setFlatChecked(!flatChecked)}
                />
              </div>
              <select>
                {keyQualities.map((quality) => (
                  <option value={quality} key={quality}>
                    {quality}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PrevailKeyField;
