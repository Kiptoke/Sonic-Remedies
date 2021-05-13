const RenderContinue = ({ canContinue, handleContinueClicked }) => {
  return (
    canContinue && (
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
      >
        <button className={"music-continue"} onClick={handleContinueClicked}>
          Continue to questions
        </button>
        <p>Note: Continuing will end the music.</p>
      </div>
    )
  );
};

export default RenderContinue;
