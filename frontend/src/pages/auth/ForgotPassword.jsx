import AuthCard from "../../components/auth/AuthCard";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <section className="min-h-screen bg-[#111111] flex items-center justify-center p-6">
      <AuthCard isOn>
        <ForgotPasswordForm />
      </AuthCard>
    </section>
  );
};

export default ForgotPassword;
