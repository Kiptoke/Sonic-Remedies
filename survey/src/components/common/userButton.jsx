import "../../css/components/common/userButton.scss";
const UserButton = ({ text, onClick }) => {
  return (
    <button className="user-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default UserButton;
