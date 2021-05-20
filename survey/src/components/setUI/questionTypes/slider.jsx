const Slider = ({ handleResponded }) => {
  const options = [1, 2, 3, 4, 5];
  return (
    <div>
      <h2>
        1: Strongly Disagree | 2: Disagree | 3: Neutral | 4: Agree | 5: Strongly
        Agree
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "15rem",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {options.map((option) => (
            <p key={option} style={{ fontWeight: "bold" }}>
              {option}
            </p>
          ))}
        </div>
        <input
          type="range"
          max="5"
          min="1"
          step="1"
          defaultValue="3"
          onChange={(e) => {
            console.log(e.target.value);
            handleResponded(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Slider;
