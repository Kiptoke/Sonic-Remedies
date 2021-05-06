const SliderFields = ({ setField }) => {
  const field = "Improvisation";
  const vals = ["0%", "25%", "50%", "75%", "100%"];
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
            {vals.map((val) => (
              <div style={{ fontSize: "10px" }} key={val}>
                {val}
              </div>
            ))}
          </div>
          <input
            id={field}
            name={field}
            type="range"
            min="0"
            max="100"
            step="25"
            defaultValue="0"
            onChange={(e) => setField(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SliderFields;
