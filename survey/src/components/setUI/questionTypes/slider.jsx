import Slide from "rc-slider";
import "rc-slider/assets/index.css";

const Slider = ({ handleResponded }) => {
  const options = [1, 2, 3, 4, 5];
  const definitions = [
    "1: Strongly Disagree",
    "2: Disagree",
    "3: Neutral",
    "4: Agree",
    "5: Strongly Agree",
  ];
  return (
    <div>
      {definitions.map((def) => (
        <h2>{def}</h2>
      ))}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "15rem",
          margin: "0 auto",
        }}
      >
        <label
          htmlFor="slider"
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
        </label>
        <Slide
          id="slider"
          min={1}
          max={5}
          defaultValue={3}
          railStyle={{ backgroundColor: "#2f4858" }}
          trackStyle={{ backgroundColor: "#2f4858" }}
          handleStyle={{
            backgroundColor: "#eadbec",
            borderColor: "#662485",
            height: "3rem",
            width: "3rem",
            marginTop: "-22px",
          }}
          onChange={(val) => {
            handleResponded(val);
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
