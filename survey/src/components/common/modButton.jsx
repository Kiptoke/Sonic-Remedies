import Button from "react-bootstrap/Button";

const ModButton = ({ currentMod, buttonMod, children, setMod, disabled }) => {
  const isChosen = currentMod === buttonMod;
  return (
    <Button
      disabled={disabled}
      variant={isChosen ? "secondary" : "primary"}
      onClick={() => setMod(isChosen ? "" : buttonMod)}
    >
      {children}
    </Button>
  );
};

export default ModButton;
