import Button from "react-bootstrap/Button";

const ModButton = ({ currentMod, buttonMod, children, setMod }) => {
  const isChosen = currentMod === buttonMod;
  return (
    <Button
      variant={isChosen ? "secondary" : "primary"}
      onClick={() => setMod(isChosen ? "" : buttonMod)}
    >
      {children}
    </Button>
  );
};

export default ModButton;
