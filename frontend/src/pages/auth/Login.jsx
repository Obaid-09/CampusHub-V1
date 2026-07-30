import { useLocation, useNavigate } from "react-router-dom";

import AuthLayout from "../../Components/auth/AuthLayout";
import AuthCard from "../../Components/auth/AuthCard";
import LoginForm from "../../Components/auth/LoginForm";
import AuthFooter from "../../Components/auth/AuthFooter";

import useAuth from "../../hooks/useAuth";

import { successToast, errorToast } from "../../utils/toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (formData) => {
    try {
      await login(formData);
      successToast("Welcome back!");
      navigate(from, {
        replace: true,
      });
    } catch (error) {
      errorToast(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <AuthLayout>
      {(isOn) => (
        <AuthCard isOn={isOn}>
          <LoginForm isOn={isOn} onSubmit={handleLogin} />

          <AuthFooter
            text="Don't have an account?"
            linkText="Register"
            to="/register"
          />
        </AuthCard>
      )}
    </AuthLayout>
  );
};

export default Login;

// const Login = () => {
//   return (
//     <div
//       style={{
//         color: "red",
//         fontSize: "40px",
//         padding: "50px",
//       }}
//     >
//       LOGIN PAGE
//     </div>
//   );
// };

// export default Login;
