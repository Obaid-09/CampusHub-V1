import { Link } from "react-router-dom";
const RememberMe = () => {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center gap-3 text-gray300">
        <input type="checkbox" />
        Remember Me
      </label>

      <Link to="/forgot-password">
        <button
          className="
            text-primary
            hover:underline
            text-sm
            "
        >
          Forgot Password?
        </button>
      </Link>
    </div>
  );
};

export default RememberMe;
