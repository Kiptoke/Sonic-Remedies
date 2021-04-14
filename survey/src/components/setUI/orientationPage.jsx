import "../../css/components/setUI/orientationPage.scss";
import UserButton from "../common/userButton";
const OrientationPage = ({ setId, totalSets, clickContinue }) => {
  return (
    <div className="orientation-page global-container">
      <h1>
        Question set {setId + 1} / {totalSets}
      </h1>
      <UserButton text="Continue" onClick={clickContinue} />
    </div>
  );
};

export default OrientationPage;
