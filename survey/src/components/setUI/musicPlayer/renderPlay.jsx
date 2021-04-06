import { ReactComponent as Play } from "../../../vectors/play.svg";
import { ReactComponent as Pause } from "../../../vectors/pause.svg";

const circleClicked = (playState, setPlayState, audio) => {
  switch (playState) {
    case "paused":
      audio.play();
      setPlayState("playing");
      return;
    case "playing":
      audio.pause();
      setPlayState("paused");
      return;
    default:
      return;
  }
};

const RenderPlay = ({ playState, setPlayState, audio }) => {
  switch (playState) {
    case "paused":
      return (
        <Play
          className={"player play-button"}
          onClick={() => {
            circleClicked(playState, setPlayState, audio);
          }}
        ></Play>
      );
    case "playing":
      return (
        <Pause
          className={"player pause-buton"}
          onClick={() => {
            circleClicked(playState, setPlayState, audio);
          }}
        />
      );

    default:
      return "Error";
  }
};

export default RenderPlay;
