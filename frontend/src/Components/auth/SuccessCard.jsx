import { CheckCircle } from "lucide-react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const SuccessCard = ({ title, description, buttonText, to }) => {
  return (
    <div className="text-center">
      <CheckCircle size={70} className="mx-auto text-primary" />

      <h1 className="mt-6 text-4xl font-heading font-bold text-white">
        {title}
      </h1>

      <p className="mt-4 text-gray300 leading-7">{description}</p>

      <Link to={to}>
        <Button className="w-full mt-8 h-14">{buttonText}</Button>
      </Link>
    </div>
  );
};

export default SuccessCard;
