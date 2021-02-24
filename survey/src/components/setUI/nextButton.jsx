import { HashLink } from "react-router-hash-link";
import { ReactComponent as NextButtonChosen } from "../../vectors/arrowDownChosen.svg";

const NextButton = ({ revealNext, pos, handleClicked }) => {
  const nextPosId = "#question" + (pos + 1);
  return revealNext ? (
    <HashLink
      smooth
      to={nextPosId}
      className="next-link"
      onClick={handleClicked}
    >
      <div>Next</div>
      <NextButtonChosen className="next-button" />
    </HashLink>
  ) : (
    "" //<NextButton className="next-button" />
  );
};

export default NextButton;
