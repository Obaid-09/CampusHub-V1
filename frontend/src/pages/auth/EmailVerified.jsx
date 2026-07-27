import AuthCard from "../../components/auth/AuthCard";
import SuccessCard from "../../components/auth/SuccessCard";

const EmailVerified = () => {
  return (
    <section className="min-h-screen bg-[#111111] flex items-center justify-center p-6">
      <AuthCard isOn>
        <SuccessCard
          title="Email Verified!"
          description="Your account has been successfully verified."
          buttonText="Continue to Login"
          to="/login"
        />
      </AuthCard>
    </section>
  );
};

export default EmailVerified;
