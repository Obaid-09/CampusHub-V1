import AuthHeader from "./AuthHeader";
import PasswordInput from "./PasswordInput";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm = () => {
    const navigate = useNavigate();
    return (

        <>

            <AuthHeader
                title="Reset Password"
                subtitle="Create a new secure password."
            />

            <div className="space-y-6">

                <PasswordInput
                    label={
                        <>
                            New Password
                            <span className="text-red-500 ml-1">*</span>
                        </>
                    }
                    placeholder="New password"
                />

                <PasswordInput
                    label={
                        <>
                            Confirm Password
                            <span className="text-red-500 ml-1">*</span>
                        </>
                    }
                    placeholder="Confirm password"
                />

                <Button
                    onClick={() =>
                        navigate("/password-reset-success")
                    }
                >
                Update Password
                </Button>

            </div>

        </>

    );

};

export default ResetPasswordForm;