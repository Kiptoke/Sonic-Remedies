import "../../../css/components/musicPage.scss";
import { Howl } from "howler";
import { useState, useEffect, useCallback, Fragment } from "react";
import audiofile from "../../../audio/AE.mp3";
import RenderPlay from "./renderPlay";
import RenderContinue from "./renderContinue";
import togglePlayer from "./togglePlayer";
import ProgressBar from "./progressBar";

const MusicPlayer = ({ file_path, handleMusicDone }) => {
  const [playState, setPlayState] = useState("paused");
  const [canContinue, setCanContinue] = useState(false);
  const [audio] = useState(
    new Howl({ src: audiofile, volume: 0.2, html5: true })
  );
  const [progress, setProgress] = useState(0);
  const checkHalfway = useCallback(() => {
    if (audio.seek() > audio.duration() / 2) {
      clearInterval(checkHalfway);
      setCanContinue(true);
    }
  }, [audio]);
  const updateProgress = useCallback(() => {
    setProgress((audio.seek() / audio.duration()) * 100);
  }, [audio]);

  useEffect(() => {
    const checkHalfwayInterval = setInterval(checkHalfway, 1000);
    const setProgressInterval = setInterval(updateProgress, 100);
    audio.on("end", () => {
      audio.seek(0);
      setPlayState("paused");
    });

    return () => {
      clearInterval(checkHalfwayInterval);
      clearInterval(setProgressInterval);
    };
  }, [checkHalfway, updateProgress, audio]);

  return (
    <Fragment>
      <div
        className="music-player"
        onClick={() => togglePlayer(playState, setPlayState, audio)}
      >
        <ProgressBar size={180} progress={progress} strokeWidth={6} />
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
