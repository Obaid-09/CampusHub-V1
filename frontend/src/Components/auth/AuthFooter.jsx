import { Link } from "react-router-dom";

const AuthFooter = ({
    text,
    linkText,
    to,
}) => {

    return (

        <p
            className="
                mt-8
                text-center
                text-gray300
            "
        >

            {text}

            <Link

                to={to}

                className="
                    ml-2
                    text-primary
                    font-semibold
                    hover:underline
                "

            >

                {linkText}

            </Link>

        </p>

    );

};

export default AuthFooter;