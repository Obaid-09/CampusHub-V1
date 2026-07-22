// import AuthLayout from "../../components/auth/AuthLayout";

// const Login = () => {

//     return <AuthLayout />;

// };

// export default Login;

// import { Link } from "react-router-dom";

// import Button from "../../components/ui/Button";

// import AuthCard from "../../components/auth/AuthCard";

// import AuthInput from "../../components/auth/AuthInput";

// import PasswordInput from "../../components/auth/PasswordInput";

// import RememberMe from "../../components/auth/RememberMe";

// import SocialLogin from "../../components/auth/SocialLogin";

// import AuthFooter from "../../components/auth/AuthFooter";

// const Login = () => {

//     return (

//         <AuthCard

//             title="Welcome Back 👋"

//             subtitle="Sign in to continue your learning journey."

//         >

//             <div className="space-y-5">

//                 <AuthInput

//                     label="Email"

//                     type="email"

//                     placeholder="Enter your email"

//                 />

//                 <PasswordInput

//                     label="Password"

//                     placeholder="Enter password"

//                 />

//                 <div
//                     className="
//                         flex
//                         justify-between
//                         items-center
//                     "
//                 >

//                     <RememberMe/>

//                     <Link

//                         to="/forgot-password"

//                         className="
//                             text-primary
//                             text-sm
//                             hover:underline
//                         "
//                     >

//                         Forgot Password?

//                     </Link>

//                 </div>

//                 <Button className="w-full">

//                     Sign In

//                 </Button>

//                 <div
//                     className="
//                         flex
//                         items-center
//                         gap-4
//                     "
//                 >

//                     <div className="flex-1 h-px bg-white/10"/>

//                     <span className="text-black">

//                         OR

//                     </span>

//                     <div className="flex-1 h-px bg-white/10"/>

//                 </div>

//                 <SocialLogin/>

//                 <AuthFooter

//                     text="Don't have an account?"

//                     linkText="Register"

//                     to="/register"

//                 />

//             </div>

//         </AuthCard>

//     );

// };

// export default Login;

import { useLocation, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import LoginForm from "../../components/auth/LoginForm";
import AuthFooter from "../../components/auth/AuthFooter";

import useAuth from "../../hooks/useAuth";

import {
    successToast,
    errorToast,
} from "../../utils/toast";

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const from =
        location.state?.from?.pathname ||
        "/";

    const handleLogin = async (formData) => {

        try {
            await login(formData);
            successToast("Welcome back!");
            navigate(from, {
                replace: true,
            });

        } catch (error) {
            errorToast(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (

        <AuthLayout>
            {(isOn) => (
                <AuthCard isOn={isOn}>
                    <LoginForm
                        isOn={isOn}
                        onSubmit={handleLogin}
                    />

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