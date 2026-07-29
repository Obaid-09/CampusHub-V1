import logo from "../../assets/CH_logo.png";

const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-8 text-center">
      <img src={logo} alt="CampusHub" className="h-12 mx-auto mb-6" />

      <h1 className="text-5xl font-heading font-bold text-white">{title}</h1>

      <p className="mt-3 text-lg text-gray300">{subtitle}</p>
    </div>
  );
};

export default AuthHeader;
