import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {

    return (

        <AuthLayout>

            {(isOn) => (

                <AuthCard isOn={isOn}>

                    <RegisterForm isOn={isOn} />

                </AuthCard>

            )}

        </AuthLayout>
        // <AuthCard>

        //     <RegisterForm />

        // </AuthCard>

    );

};

export default Register;