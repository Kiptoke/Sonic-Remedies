import { useRef } from "react";
const SliderFields = ({ setField }) => {
  const field = "Improvisation";
  const valueRef = useRef(0);

  return (
    <div className="field-container" key={field}>
      <div className="fc-main">
        <label htmlFor={field}>{field}</label>
        <div
          style={{ display: "flex", flexDirection: "column", minWidth: "55%" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {`${valueRef.current}%`}
          </div>
          <input
            id={field}
            name={field}
            type="range"
            min="0"
            max="100"
            step="10"
            defaultValue="0"
            onChange={(e) => {
              setField(e.target.value);
              valueRef.current = e.target.value;
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SliderFields;
