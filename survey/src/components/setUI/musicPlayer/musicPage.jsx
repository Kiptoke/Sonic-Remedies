import "../../../css/components/musicPage.scss";
import { Howl } from "howler";
import { useState, useEffect, Fragment } from "react";
import audiofile from "../../../audio/AE.mp3";
import RenderPlay from "./renderPlay";
import RenderContinue from "./renderContinue";

const MusicPlayer = ({ file_path, handleMusicDone }) => {
  const [playState, setPlayState] = useState("paused");
  const [canContinue, setCanContinue] = useState(false);
  const [audio] = useState(
    new Howl({ src: audiofile, volume: 0.2, html5: true })
  );
  const checkHalfway = () => {
    if (audio.seek() > audio.duration() / 2) {
      clearInterval(checkHalfway);
      setCanContinue(true);
    }
  };
  useEffect(() => {
    let checkHalfwayInterval = setInterval(checkHalfway, 1000);
    return () => {
      clearInterval(checkHalfwayInterval);
    };
  });

  return (
    <Fragment>
      <div className="music-player">
        <RenderPlay
          playState={playState}
          audio={audio}
          setPlayState={setPlayState}
        />
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
