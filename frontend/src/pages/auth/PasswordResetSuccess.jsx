import AuthCard from "../../Components/auth/AuthCard";
import SuccessCard from "../../Components/auth/SuccessCard";

const PasswordResetSuccess = () => {

    return (

        <section className="min-h-screen bg-[#111111] flex items-center justify-center p-6">

            <AuthCard isOn>

                <SuccessCard
                    title="Password Updated!"
                    description="Your password has been changed successfully."
                    buttonText="Login"
                    to="/login"
                />

            </AuthCard>

        </section>

    );

};

export default PasswordResetSuccess;