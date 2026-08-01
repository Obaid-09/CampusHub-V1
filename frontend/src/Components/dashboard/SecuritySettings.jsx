import { useNavigate } from "react-router-dom";

import SettingsSection from "./SettingsSection";
import SettingRow from "./SettingRow";
import { successToast, errorToast } from "../../utils/toast";
import useAuth from "../../hooks/useAuth";
const SecuritySettings = () => {
  const navigate = useNavigate();
    const { logout } = useAuth();
    const handleLogout = async () => {
      try {
        await logout();
        successToast("Logged out successfully");
        navigate("/login", {
          replace: true,
        });
      } catch (error) {
        errorToast(error.response?.data?.message || "Logout failed");
      }
    };

  return (
    <SettingsSection title="Security">
      <div className="space-y-6">
        <SettingRow
          title="Change Password"
          description="Update your password regularly to keep your account secure."
          buttonText="Change"
          onClick={() => navigate("/change-password")}
        />

        <SettingRow
          title="Email Verification"
          description="Verify your email to access all CampusHub features."
          buttonText="Coming Soon"
          // onClick={() => navigate("/verify-email")}
        />

        <SettingRow
          title="Logout"
          description="Sign out from your current device."
          buttonText="Logout"
          onClick={handleLogout}
        />
      </div>
    </SettingsSection>
  );
};

export default SecuritySettings;
