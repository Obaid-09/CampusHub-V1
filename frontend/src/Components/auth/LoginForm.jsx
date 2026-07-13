import AuthInput from "./AuthInput";
import Button from "../ui/Button";
import SocialLogin from "./SocialLogin";
import AuthHeader from "./AuthHeader";
import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";
import AuthFooter from "./AuthFooter";

const LoginForm = ({isOn}) => {
    return (
        // <>

        //     <h2 className="text-4xl font-heading font-bold text-white">
        //         Welcome Back
        //     </h2>

        //     <p className="mt-2 text-gray-300">
        //         Sign in to continue to CampusHub
        //     </p>

        //     <div className="mt-8 space-y-5">

        //         <AuthInput
        //             label="Email"
        //             type="email"
        //         />

        //         <AuthInput
        //             label="Password"
        //             type="password"
        //         />

        //         <div className="flex justify-end">

        //             <button
        //                 className="
        //                     text-primary
        //                     text-sm
        //                     hover:underline
        //                 "
        //             >
        //                 Forgot Password?
        //             </button>

        //         </div>

        //         <Button className="w-full">
        //             Sign In
        //         </Button>

        //         <SocialLogin />

        //     </div>

        // </>

        <>
    <AuthHeader
        title="Welcome Back"
        subtitle="Sign in to continue to CampusHub"
    />

    <div className="space-y-6">

        <AuthInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            disabled={!isOn}
        />

        <PasswordInput
            label="Password"
            placeholder="Enter your password"
            disabled={!isOn}
        />

        <RememberMe />

        <Button
            className="w-full h-14 text-lg"
            disabled={!isOn}
        >
            Sign In
        </Button>

        <SocialLogin disabled={!isOn}/>

        <AuthFooter/>

    </div>
</>
    );
};

export default LoginForm;