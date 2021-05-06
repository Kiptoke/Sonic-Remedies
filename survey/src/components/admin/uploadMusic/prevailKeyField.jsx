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
  "N/A",
];

const buildPKString = (letter, flatChecked, sharpChecked, quality) => {
  const mark = flatChecked ? "f" : sharpChecked ? "s" : "";
  if (letter === "N/A") return "N/A";
  else {
    return letter + mark + (quality !== "N/A" ? quality : "");
  }
};

const PrevailKeyField = ({ setPrevailingKey }) => {
  const [keySelected, setKeySelected] = useState(false);
  const [flatChecked, setFlatChecked] = useState(false);
  const [sharpChecked, setSharpChecked] = useState(false);
  const [letter, setLetter] = useState("N/A");
  const [quality, setQuality] = useState("Major");
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
              if (e.target.value === "N/A") {
                setKeySelected(false);
                setFlatChecked(false);
                setSharpChecked(false);
                setQuality("Major");
              } else {
                setKeySelected(true);
              }
              setLetter(e.target.value);
              setPrevailingKey(
                buildPKString(
                  e.target.value,
                  flatChecked,
                  sharpChecked,
                  quality
                )
              );
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
                  onChange={() => {
                    setPrevailingKey(
                      buildPKString(letter, flatChecked, !sharpChecked, quality)
                    );
                    setSharpChecked(!sharpChecked);
                  }}
                />
              </div>
              <div style={{ marginRight: "0.5rem" }}>
                <label htmlFor="♭">♭</label>
                <input
                  style={{ width: "1rem" }}
                  type="checkbox"
                  name="♭"
                  disabled={sharpChecked}
                  onClick={() => {
                    setPrevailingKey(
                      buildPKString(letter, !flatChecked, sharpChecked, quality)
                    );
                    setFlatChecked(!flatChecked);
                  }}
                />
              </div>
              <select
                name="Key Quality"
                onChange={(e) => {
                  setQuality(e.target.value);
                  setPrevailingKey(
                    buildPKString(
                      letter,
                      flatChecked,
                      sharpChecked,
                      e.target.value
                    )
                  );
                }}
                defaultValue="Major"
              >
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
