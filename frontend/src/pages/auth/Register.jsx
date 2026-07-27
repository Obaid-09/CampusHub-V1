import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import RegisterForm from "../../components/auth/RegisterForm";
import useAuth from "../../hooks/useAuth";
import { authAPI } from "../../api/auth.api";
import { successToast, errorToast } from "../../utils/toast";

const Register = () => {
  const navigate = useNavigate();
  const { refreshUser } = useAuth();

  const handleRegister = async (formData) => {
    try {
      await authAPI.register(formData);
      await refreshUser();
      successToast("Account created successfully!");

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      errorToast(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <AuthLayout>
      {(isOn) => (
        <AuthCard isOn={isOn}>
          <RegisterForm isOn={isOn} onSubmit={handleRegister} />
        </AuthCard>
      )}
    </AuthLayout>
    // <AuthCard>

    //     <RegisterForm />

    // </AuthCard>
  );
};

export default Register;
