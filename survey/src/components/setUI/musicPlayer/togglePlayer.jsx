const togglePlayer = (playState, setPlayState, audio) => {
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

export default togglePlayer;
