import { Mail } from "lucide-react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const VerifyEmailCard = () => {

    return (

        <div className="text-center">

            <Mail
                size={70}
                className="mx-auto text-primary"
            />

            <h1 className="mt-6 text-4xl font-heading font-bold text-white">
                Verify Your Email
            </h1>

            <p className="mt-4 text-gray300 leading-7">
                We've sent a verification link to your email.
                Please verify your account before logging in.
            </p>

            <Button className="w-full mt-8 h-14">
                Resend Email
            </Button>

            <Link
                to="/login"
                className="block mt-6 text-primary hover:underline"
            >
                Back to Login
            </Link>

        </div>

    );

};

export default VerifyEmailCard;