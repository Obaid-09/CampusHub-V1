// import AuthInput from "./AuthInput";
// import Button from "../ui/Button";
// import SocialLogin from "./SocialLogin";
// import AuthHeader from "./AuthHeader";
// import PasswordInput from "./PasswordInput";
// import RememberMe from "./RememberMe";
// import AuthFooter from "./AuthFooter";

// const LoginForm = ({isOn}) => {
//     return (
//         <>
//     <AuthHeader
//         title="Welcome Back"
//         subtitle="Sign in to continue to CampusHub"
//     />

//     <div className="space-y-6">

//         <AuthInput
//             label="Email"
//             type="email"
//             placeholder="Enter your email"
//             disabled={!isOn}
//         />

//         <PasswordInput
//             label="Password"
//             placeholder="Enter your password"
//             disabled={!isOn}
//         />

//         <RememberMe />

//         <Button
//             className="w-full h-14 text-lg"
//             disabled={!isOn}
//         >
//             Sign In
//         </Button>

//         <SocialLogin disabled={!isOn}/>

//         <AuthFooter/>

//     </div>
// </>
//     );
// };

// export default LoginForm;

import { useState } from "react";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";
import SocialLogin from "./SocialLogin";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";
import Button from "../ui/Button";

const LoginForm = ({
    isOn,
    onSubmit,
}) => {

    console.log("onSubmit:", onSubmit);
    const [form, setForm] = useState({

        email: "",

        password: "",

    });

    const [loading, setLoading] = useState(false);

    const handleChange = (key, value) => {

        setForm((prev) => ({

            ...prev,

            [key]: value,

        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            await onSubmit(form);

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>

            <AuthHeader

                title="Welcome Back"

                subtitle="Sign in to continue to CampusHub"

            />

            <form

                onSubmit={handleSubmit}

                className="space-y-6"

            >

                <AuthInput

                    label="Email"

                    type="email"

                    placeholder="Enter your email"

                    value={form.email}

                    onChange={(e) =>

                        handleChange(

                            "email",

                            e.target.value

                        )

                    }

                    disabled={!isOn || loading}

                />

                <PasswordInput

                    label="Password"

                    placeholder="Enter your password"

                    value={form.password}

                    onChange={(e) =>

                        handleChange(

                            "password",

                            e.target.value

                        )

                    }

                    disabled={!isOn || loading}

                />

                <RememberMe />

                <Button

                    type="submit"

                    loading={loading}

                    className="w-full h-14 text-lg"

                    disabled={!isOn}

                >

                    Sign In

                </Button>

                <SocialLogin

                    disabled={!isOn || loading}

                />

                <AuthFooter />

            </form>

        </>

    );

};

export default LoginForm;