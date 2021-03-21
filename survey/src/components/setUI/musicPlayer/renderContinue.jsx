const pressedContinue = (audio, handleMusicDone) => {
  audio.unload();
  handleMusicDone();
};

const RenderContinue = ({ playState, audio, handleMusicDone }) => {
  return (
    playState !== "init" &&
    playState !== "waiting" && (
      <button
        className={"music-continue"}
        onClick={() => {
          pressedContinue(audio, handleMusicDone);
        }}
      >
        Continue to questions
      </button>
    )
  );
};

export default RenderContinue;
