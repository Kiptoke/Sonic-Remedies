import { ReactComponent as ArrowDownHighlighted } from "../../vectors/arrowDownHighlighted.svg";

const NextButton = ({ revealNext, handleClicked }) => {
  return revealNext ? (
    <button className="next-button" onClick={handleClicked}>
      <div>Next</div>
      <ArrowDownHighlighted className="arrow" />
    </button>
  ) : (
    ""
  );
};

export default NextButton;
