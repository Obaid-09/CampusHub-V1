import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";
import AuthFooter from "./AuthFooter";
import AvatarUpload from "./AvatarUpload";
import TermsCheckbox from "./TermsCheckbox";

import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

const branches = [

    {
        value:"CSE",
        label:"Computer Science",
    },

    {
        value:"ECE",
        label:"Electronics",
    },

    {
        value:"EEE",
        label:"Electrical",
    },

    {
        value:"ME",
        label:"Mechanical",
    },

    {
        value:"CE",
        label:"Civil",
    },

];

const semesters = Array.from(
    {
        length:8
    },
    (_,i)=>({

        value:i+1,

        label:`Semester ${i+1}`

    })
);

const years = [

    {
        value:1,
        label:"1st Year",
    },

    {
        value:2,
        label:"2nd Year",
    },

    {
        value:3,
        label:"3rd Year",
    },

    {
        value:4,
        label:"4th Year",
    },

];

const RegisterForm = ({
    isOn,
}) => {

    return (

        <>

            <AuthHeader

                title="Create Account"

                subtitle="Join CampusHub and start sharing resources."

            />

            <div className="space-y-5">

                <AuthInput

                    label={
                        <>
                            Username
                            <span className="text-red-500 ml-1">*</span>
                        </>
                    }

                    placeholder="Enter username"

                    disabled={!isOn}

                />

                <AuthInput

                    label={
                        <>
                            Full Name
                            <span className="text-red-500 ml-1">*</span>
                        </>
                    }

                    placeholder="Enter full name"

                    disabled={!isOn}

                />

                <AuthInput

                    label={
                        <>
                            Email
                            <span className="text-red-500 ml-1">*</span>
                        </>
                    }

                    type="email"

                    placeholder="Enter email"

                    disabled={!isOn}

                />

                <Select

                    label={
                        <>
                            Branch
                            <span className="text-red-500 ml-1">*</span>
                        </>
                    }

                    options={branches}

                    disabled={!isOn}

                />

                <div className="grid grid-cols-2 gap-4">

                    <Select

                        label={
                            <>
                                Semester
                                <span className="text-red-500 ml-1">*</span>
                            </>
                        }

                        options={semesters}

                        disabled={!isOn}

                    />

                    <Select

                        label={
                            <>
                                Year
                                <span className="text-red-500 ml-1">*</span>
                            </>
                        }

                        options={years}

                        disabled={!isOn}

                    />

                </div>

                <AuthInput

                    label="College"

                    placeholder="NIT Warangal"

                    disabled={!isOn}

                />

                <Textarea

                    label="Bio"

                    placeholder="Tell us about yourself..."

                    disabled={!isOn}

                />

                <AvatarUpload

                    disabled={!isOn}

                />

                <PasswordInput

                    label={
                        <>
                            Password
                            <span className="text-red-500 ml-1">*</span>
                        </>
                    }

                    placeholder="Create password"

                    disabled={!isOn}

                />

                <PasswordInput

                    label={
                        <>
                            Confirm Password
                            <span className="text-red-500 ml-1">*</span>
                        </>
                    }

                    placeholder="Confirm password"

                    disabled={!isOn}

                />

                <TermsCheckbox/>

                <Button

                    className="w-full h-14 text-lg"

                    disabled={!isOn}

                >

                    Create Account

                </Button>

                <div className="flex items-center gap-4">

                    <div className="flex-1 h-px bg-white/10"/>

                    <span className="text-gray400">

                        OR

                    </span>

                    <div className="flex-1 h-px bg-white/10"/>

                </div>

                <SocialLogin

                    disabled={!isOn}

                />

                <AuthFooter

                    text="Already have an account?"

                    linkText="Login"

                    to="/login"

                />

            </div>

        </>

    );

};

export default RegisterForm;