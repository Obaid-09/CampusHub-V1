import Button from "../ui/Button";

const EmptyStateAction = ({
    text,
    onClick,
}) => {

    if (!text) return null;

    return (

        <Button
            className="mt-8"
            onClick={onClick}
        >
            {text}
        </Button>

    );

};

export default EmptyStateAction;