const field = "Consistent Vibe";

const YesNoFields = ({ setField }) => {
  return (
    <div className="field-container" key={field}>
      <div className="fc-main">
        <label htmlFor={field}>{field}</label>
        <div
          style={{
            minWidth: "55%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div className="yes-no-option">
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              id="yes"
              name={field}
              value={true}
              onChange={(e) => setField(e.target.value)}
            />
          </div>
          <div className="yes-no-option">
            <label htmlFor="no">No</label>
            <input
              type="radio"
              id="no"
              name={field}
              value={false}
              defaultChecked={true}
              onChange={(e) => setField(!e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YesNoFields;
