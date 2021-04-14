import { ReactComponent as QuarterNote } from "../../vectors/quarterNote.svg";
import { useSpring, animated, config } from "react-spring";

const AnimatedNote = ({ delay, noteColor, finalPosition }) => {
  const props = useSpring({
    config: config.molasses,
    display: "flex",
    delay: delay,
    top: finalPosition.y,
    right: finalPosition.x - 40,
    opacity: 0,
    from: {
      display: "none",
      opacity: 1,
      top: 0,
      right: -40,
    },
  });

  return (
    <div style={{ position: "absolute" }}>
      <animated.div
        style={{
          position: "relative",
          width: "7rem",
          height: "7rem",
          pointerEvents: "none",
          ...props,
        }}
      >
        <QuarterNote fill={noteColor} />
      </animated.div>
    </div>
  );
};

export default AnimatedNote;
