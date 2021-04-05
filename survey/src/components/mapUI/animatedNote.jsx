import { ReactComponent as QuarterNote } from "../../vectors/quarterNote.svg";
import { useSpring, animated, config } from "react-spring";

const finalPosGen = () => {
  const randDir = Math.floor(Math.random() * 2) === 0 ? 1 : -1;
  const rand = Math.floor(Math.random() * 130 + 30);
  return randDir * rand;
};

const randColor = () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const AnimatedNote = ({ delay }) => {
  const randTop = finalPosGen() - 50;
  const randRight = finalPosGen();
  const props = useSpring({
    config: config.slow,
    display: "flex",
    delay: delay,
    top: randTop,
    right: randRight,
    opacity: 0,
    from: {
      display: "none",
      opacity: 1,
      top: randTop / 4,
      right: randRight / 4,
    },
  });

  return (
    <div style={{ position: "absolute" }}>
      <animated.div
        style={{
          position: "relative",
          pointerEvents: "none",
          ...props,
        }}
      >
        <QuarterNote fill={randColor()} />
      </animated.div>
    </div>
  );
};

export default AnimatedNote;
