import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { useState } from "react";
import AccountSettings from "../../components/dashboard/AccountSettings";
import SecuritySettings from "../../components/dashboard/SecuritySettings";
import PreferenceSettings from "../../components/dashboard/PreferenceSettings";
import Danger from "../../components/dashboard/Danger";
import EditProfileModal from "../../components/profile/EditProfileModal";

const Settings = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1
            className="
                            text-4xl
                            font-heading
                            font-bold
                            text-secondary
                        "
          >
            Settings
          </h1>

          <p className="mt-2 text-gray600">Manage your account preferences.</p>
        </div>

        <AccountSettings onEdit={() => setShowEditProfile(true)} />
        <SecuritySettings />

        <PreferenceSettings />

        <Danger />
        <EditProfileModal
          open={showEditProfile}
          onClose={() => setShowEditProfile(false)}
        />
      </div>
    </DashboardLayout>
  );
};

export default Settings;
