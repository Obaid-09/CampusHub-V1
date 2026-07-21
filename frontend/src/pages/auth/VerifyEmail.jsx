import AuthCard from "../../components/auth/AuthCard";
import VerifyEmailCard from "../../components/auth/VerifyEmailCard";

const VerifyEmail = () => {

    return (

        <section className="min-h-screen bg-[#111111] flex items-center justify-center p-6">

            <AuthCard isOn>

                <VerifyEmailCard/>

            </AuthCard>

        </section>

    );

};

export default VerifyEmail;