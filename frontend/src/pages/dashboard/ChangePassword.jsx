import AuthCard from "../../Components/auth/AuthCard";
import ChangePasswordForm from "../../Components/auth/ChangePasswordForm"

const ChangePassword = () => {
  return (
    <section className="min-h-screen bg-[#111111] flex items-center justify-center p-6">
      <AuthCard isOn>
        <ChangePasswordForm />
      </AuthCard>
    </section>
  );
};

export default ChangePassword;
