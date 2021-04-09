import { ReactComponent as Play } from "../../../vectors/play.svg";
import { ReactComponent as Pause } from "../../../vectors/pause.svg";

const RenderPlay = ({ playState }) => {
  switch (playState) {
    case "paused":
      return <Play className={"player play-button"}></Play>;
    case "playing":
      return <Pause className={"player pause-buton"} />;

    default:
      return "Error";
  }
};

export default RenderPlay;
