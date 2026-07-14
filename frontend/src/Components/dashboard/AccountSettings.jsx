import { accountSettings } from "../../constants/settings";
import SettingsSection from "./SettingsSection";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {

    const navigate = useNavigate();

    return (

        <SettingsSection title="Account">

            <div className="grid md:grid-cols-2 gap-6">

                <Info
                    label="Full Name"
                    value={accountSettings.fullname}
                />

                <Info
                    label="Username"
                    value={accountSettings.username}
                />

                <Info
                    label="Email"
                    value={accountSettings.email}
                />

                <Info
                    label="College"
                    value={accountSettings.college}
                />

            </div>

            <Button
                className="mt-8"
                onClick={() =>
                    navigate("/profile/edit")
                }
            >

                Edit Profile

            </Button>

        </SettingsSection>

    );

};

const Info = ({ label, value }) => (

    <div>

        <p className="text-gray500">

            {label}

        </p>

        <h3
            className="
                mt-2
                text-lg
                font-semibold
                text-secondary
            "
        >

            {value}

        </h3>

    </div>

);

export default AccountSettings;