import AuthCard from "../../Components/auth/AuthCard";
import VerifyEmailCard from "../../Components/auth/VerifyEmailCard";

const VerifyEmail = () => {
  return (
    <section className="min-h-screen bg-[#111111] flex items-center justify-center p-6">
      <AuthCard isOn>
        <VerifyEmailCard />
      </AuthCard>
    </section>
  );
};

export default VerifyEmail;
