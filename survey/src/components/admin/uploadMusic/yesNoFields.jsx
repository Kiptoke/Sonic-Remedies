const fields = [{ name: "Consistent Vibe" }];

const YesNoFields = () => {
  return fields.map((field) => (
    <div className="field-container">
      <div className="fc-main" key={field.name}>
        <label htmlFor={field.name}>{field.name}</label>
        <div
          style={{
            minWidth: "55%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div className="yes-no-option">
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="yes" name={field.name} value={true} />
          </div>
          <div className="yes-no-option">
            <label htmlFor="no">No</label>
            <input
              type="radio"
              id="no"
              name={field.name}
              value={false}
              defaultChecked={true}
            />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default YesNoFields;
