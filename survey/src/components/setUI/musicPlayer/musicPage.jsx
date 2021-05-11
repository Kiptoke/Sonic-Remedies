import "../../../css/components/musicPage.scss";
import { Howl } from "howler";
import { useState, useEffect, useCallback, Fragment } from "react";
import RenderPlay from "./renderPlay";
import myfile from "../../../audio/1.mp3";
import RenderContinue from "./renderContinue";
import togglePlayer from "./togglePlayer";
import ProgressBar from "./progressBar";
import API from "../../../services/api-client";

const getMusicFile = async (filename, setAudio) => {
  const musicfileblob = await API.getOneFile("music/files", filename);
  const myhowl = new Howl({
    src: [URL.createObjectURL(musicfileblob)],
    html5: true,
    format: "mp3",
  });
  myhowl.on("loaderror", () => {
    throw Error("Howler error loading downloaded file");
  });
  setAudio(myhowl);
};

const MusicPlayer = ({ filename, handleMusicDone }) => {
  const [playState, setPlayState] = useState("paused");
  const [canContinue, setCanContinue] = useState(false);
  const [audio, setAudio] = useState(null);
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
    if (!audio && filename) {
      getMusicFile(filename + ".mp3", setAudio);
    }
  }, [audio]);
  useEffect(() => {
    if (audio) {
      const checkHalfwayInterval = setInterval(checkHalfway, 1000);
      const setProgressInterval = setInterval(updateProgress, 300);
      audio.on("end", () => {
        audio.seek(0);
        setPlayState("paused");
      });
      return () => {
        clearInterval(checkHalfwayInterval);
        clearInterval(setProgressInterval);
        audio.unload();
      };
    }
  }, [checkHalfway, updateProgress, audio]);

  return audio ? (
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
  ) : (
    <h1>Loading audio...</h1>
  );
};

export default MusicPlayer;
