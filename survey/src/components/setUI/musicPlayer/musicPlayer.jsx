import "../../../css/components/musicPlayer.scss";
import { Howl } from "howler";
import { useState } from "react";
import audiofile from "../../../audio/BNS_BWV538.mp3";
import RenderPlay from "./renderPlay";

const MusicPlayer = ({ file_path, handleMusicDone }) => {
  const [playState, setPlayState] = useState("init");
  const [audio] = useState(
    new Howl({ src: audiofile, volume: 0.2, html5: true })
  );

  return (
    <RenderPlay
      playState={playState}
      setPlayState={setPlayState}
      audio={audio}
    />
  );
};

export default MusicPlayer;
