import Button from "../ui/Button";

const ActionButton = ({ text, variant, onClick }) => {
  return (
    <Button variant={variant} className="w-full" onClick={onClick}>
      {text}
    </Button>
  );
};

export default ActionButton;
