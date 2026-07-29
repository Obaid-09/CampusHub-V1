import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import Button from "../ui/Button";
import AuthFooter from "./AuthFooter";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthHeader
        title="Forgot Password"
        subtitle="Enter your registered email address."
      />

      <div className="space-y-6">
        <AuthInput
          label={
            <>
              Email
              <span className="text-red-500 ml-1">*</span>
            </>
          }
          placeholder="Enter your email"
          type="email"
        />

        <Button
          className="w-full h-14"
          onClick={() => navigate("/verify-email")}
        >
          Send Reset Link
        </Button>

        <AuthFooter text="" linkText="Back to Login" to="/login" />
      </div>
    </>
  );
};

export default ForgotPasswordForm;
