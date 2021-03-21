import { ReactComponent as Play } from "../../../vectors/play.svg";
import { ReactComponent as Pause } from "../../../vectors/pause.svg";

const circleClicked = (playState, setPlayState, audio) => {
  switch (playState) {
    case "init":
      audio.play();
      setPlayState("waiting");
      setTimeout(() => {
        setPlayState("can_pause");
      }, 5000);
      return;
    case "can_pause":
      audio.pause();
      setPlayState("can_play");
      return;
    case "can_play":
      audio.play();
      setPlayState("can_pause");
      return;
    default:
      return;
  }
};

const RenderPlay = ({ playState, setPlayState, audio }) => {
  switch (playState) {
    case "init":
      return (
        <Play
          className={"player play-button"}
          onClick={() => {
            circleClicked(playState, setPlayState, audio);
          }}
        />
      );
    case "waiting":
      return "";
    case "can_pause":
      return (
        <Pause
          className={"player pause-button"}
          onClick={() => {
            circleClicked(playState, setPlayState, audio);
          }}
        />
      );
    case "can_play":
      return (
        <Play
          className={"player play-button"}
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
