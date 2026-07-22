import { Link } from "react-router-dom";
const TermsCheckbox = ({
    checked,
    onChange,
}) => {

    return (

        <label
            className="
                flex
                gap-3
                items-start
                text-gray300
                text-sm
            "
        >

            <input
    type="checkbox"

    checked={checked}

    onChange={onChange}

    className="
        mt-1
        accent-primary
    "
/>

            <span>

                I agree to the
            <Link to="/terms">
                <span className="text-primary">
                    {" "}Terms of Service
                </span>
            </Link>
                {" "}and{" "}

            <Link to="/privacy">
                <span className="text-primary">

                    Privacy Policy

                </span>
            </Link>
            </span>

        </label>

    );

};

export default TermsCheckbox;