import { useNavigate } from "react-router-dom";

import SettingsSection from "./SettingsSection";
import SettingRow from "./SettingRow";
const SecuritySettings = () => {

    const navigate = useNavigate();

    return (

       <SettingsSection title="Security">

            <div className="space-y-6">

                <SettingRow
                    title="Change Password"
                    description="Update your password regularly to keep your account secure."
                    buttonText="Change"
                    onClick={() => navigate("/forgot-password")}
                />

                <SettingRow
                    title="Email Verification"
                    description="Verify your email to access all CampusHub features."
                    buttonText="Verify"
                    onClick={() => navigate("/verify-email")}
                />

                <SettingRow
                    title="Logout"
                    description="Sign out from your current device."
                    buttonText="Logout"
                    // onClick={logoutHandler}
                />

            </div>

        </SettingsSection>

    );

};

export default SecuritySettings;