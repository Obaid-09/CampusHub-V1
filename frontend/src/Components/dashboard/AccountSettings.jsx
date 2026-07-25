import useAuth from "../../hooks/useAuth";
import SettingsSection from "./SettingsSection";
import Button from "../ui/Button";

const AccountSettings = ({ onEdit }) => {
  const { user } = useAuth();

  return (
    <SettingsSection title="Account">
      <div className="grid md:grid-cols-2 gap-6">
        <Info label="Full Name" value={user?.fullname || "-"} />

        <Info label="Username" value={user?.username || "-"} />

        <Info label="Email" value={user?.email} />

        <Info label="College" value={user?.college} />
      </div>

      {/* <Button className="mt-8" onClick={() => navigate("/profile/edit")}> */}
      <Button className="mt-8" onClick={onEdit}>
        Edit Profile
      </Button>
    </SettingsSection>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray500">{label}</p>

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
