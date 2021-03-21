import "../../../css/components/musicPage.scss";
import { Howl } from "howler";
import { useState, Fragment } from "react";
import audiofile from "../../../audio/BNS_BWV538.mp3";
import RenderPlay from "./renderPlay";
import RenderContinue from "./renderContinue";

const MusicPlayer = ({ file_path, handleMusicDone }) => {
  const [playState, setPlayState] = useState("init");
  const [audio] = useState(
    new Howl({ src: audiofile, volume: 0.2, html5: true })
  );

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
        playState={playState}
        audio={audio}
        handleMusicDone={handleMusicDone}
      />
    </Fragment>
  );
};

export default MusicPlayer;
