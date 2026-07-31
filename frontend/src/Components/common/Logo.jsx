import logo from "../../assets/CH_logo.png";
import { Link } from "react-router-dom";

const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src={logo}
        alt="CampusHub Logo"
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;
