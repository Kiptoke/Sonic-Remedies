import "../../../css/components/musicPage.scss";
import { Howl } from "howler";
import { useState, useEffect, useCallback, Fragment } from "react";
import audiofile from "../../../audio/AE.mp3";
import RenderPlay from "./renderPlay";
import RenderContinue from "./renderContinue";
import togglePlayer from "./togglePlayer";

const MusicPlayer = ({ file_path, handleMusicDone }) => {
  const [playState, setPlayState] = useState("paused");
  const [canContinue, setCanContinue] = useState(false);
  const [audio] = useState(
    new Howl({ src: audiofile, volume: 0.2, html5: true })
  );
  const checkHalfway = useCallback(() => {
    if (audio.seek() > audio.duration() / 2) {
      clearInterval(checkHalfway);
      setCanContinue(true);
    }
  }, [audio]);

  useEffect(() => {
    const checkHalfwayInterval = setInterval(checkHalfway, 1000);
    audio.on("end", () => {
      audio.seek(0);
      setPlayState("paused");
    });
    return () => {
      clearInterval(checkHalfwayInterval);
    };
  }, [checkHalfway, audio]);

  return (
    <Fragment>
      <div
        className="music-player"
        onClick={() => togglePlayer(playState, setPlayState, audio)}
      >
        <RenderPlay playState={playState} />
      </div>
      <RenderContinue
        canContinue={canContinue}
        handleContinueClicked={() => {
          audio.pause();
          handleMusicDone();
        }}
      />
    </Fragment>
  );
};

export default MusicPlayer;
