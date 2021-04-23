const Slider = ({ handleResponded }) => {
  const options = [1, 2, 3, 4, 5];
  handleResponded(3);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxWidth: "15rem" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {options.map((option) => (
          <p style={{ fontWeight: "bold" }}>{option}</p>
        ))}
      </div>
      <input
        type="range"
        max="5"
        min="1"
        step="1"
        defaultValue="3"
        onChange={(e) => handleResponded(e.target.value)}
      ></input>
    </div>
  );
};

export default Slider;
