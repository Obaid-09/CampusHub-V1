import AuthCard from "../../Components/auth/AuthCard";
import ResetPasswordForm from "../../Components/auth/ResetPasswordForm";

const ResetPassword = () => {

    return (

        <section className="min-h-screen bg-[#111111] flex items-center justify-center p-6">

            <AuthCard isOn>

                <ResetPasswordForm/>

            </AuthCard>

        </section>

    );

};

export default ResetPassword;