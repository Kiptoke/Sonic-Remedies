import { ReactComponent as ArrowDownHighlighted } from "../../vectors/arrowDownHighlighted.svg";

const ArrowButton = ({ text, isShown, handleClicked }) => {
  return isShown ? (
    <button className="arrow-button" onClick={handleClicked}>
      <div>{text}</div>
      <ArrowDownHighlighted className="arrow" />
    </button>
  ) : (
    ""
  );
};

export default ArrowButton;
