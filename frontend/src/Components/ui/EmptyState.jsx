import Button from "./Button";

const EmptyState = ({ image, title, description, buttonText, onClick }) => {
  return (
    <div className="text-center py-16">
      {image && <img src={image} alt="" className="w-48 mx-auto mb-6" />}

      <h2 className="text-2xl font-heading font-bold text-secondary">
        {title}
      </h2>

      <p className="mt-2 text-gray500">{description}</p>

      {buttonText && (
        <Button className="mt-6" onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
