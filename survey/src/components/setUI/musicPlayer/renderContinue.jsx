const RenderContinue = ({ canContinue, handleContinueClicked }) => {
  return (
    canContinue && (
      <button className={"music-continue"} onClick={handleContinueClicked}>
        Continue to questions
      </button>
    )
  );
};

export default RenderContinue;
