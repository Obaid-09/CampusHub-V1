import { useEffect, useState } from "react";

import AdminLayout from "../../Components/admin/AdminLayout";
import SettingsSection from "../../Components/admin/SettingsSection";
import ToggleSetting from "../../Components/admin/ToggleSetting";

import Input from "../../Components/ui/Input";
import Button from "../../Components/ui/Button";
import Loader from "../../Components/ui/Loader";

import useAdminSettings from "../../hooks/useAdminSettings";
import { adminAPI } from "../../api/admin.api";
import { successToast, errorToast } from "../../utils/toast";

const AdminSettings = () => {
  const { settings, loading, refreshSettings } = useAdminSettings();

  const [form, setForm] = useState(null);

  useEffect(() => {
    if (settings) {
      setForm(settings);
    }
  }, [settings]);

  const updateSetting = (section, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSave = async () => {
    try {
      await adminAPI.updateSettings(form);

      await refreshSettings();

      successToast("Settings updated successfully.");
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to update settings.");
    }
  };

  if (loading || !form) {
    return (
      <AdminLayout>
        <div className="flex justify-center py-20">
          <Loader />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-bold text-secondary">
            Admin Settings
          </h1>

          <p className="mt-2 text-gray600">Configure the CampusHub platform.</p>
        </div>

        {/* Platform Controls */}

        <SettingsSection title="Platform Controls">
          <ToggleSetting
            label="Allow Registration"
            description="Allow new users to create accounts."
            checked={form.platform.allowRegistration}
            onChange={(checked) =>
              updateSetting("platform", "allowRegistration", checked)
            }
          />

          <ToggleSetting
            label="Enable Resource Approval"
            description="Every uploaded resource requires admin approval."
            checked={form.platform.resourceApproval}
            onChange={(checked) =>
              updateSetting("platform", "resourceApproval", checked)
            }
          />

          <ToggleSetting
            label="Enable User Reports"
            description="Allow users to report inappropriate resources."
            checked={form.platform.enableReports}
            onChange={(checked) =>
              updateSetting("platform", "enableReports", checked)
            }
          />

          <ToggleSetting
            label="Enable Email Notifications"
            description="Send system emails for approvals and account updates."
            checked={form.platform.enableEmailNotifications}
            onChange={(checked) =>
              updateSetting("platform", "enableEmailNotifications", checked)
            }
          />
        </SettingsSection>

        {/* Upload Settings */}

        <SettingsSection title="Upload Settings">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Maximum Upload Size (MB)"
              type="number"
              value={form.upload.maxUploadSize}
              onChange={(e) =>
                updateSetting("upload", "maxUploadSize", Number(e.target.value))
              }
            />

            <Input
              label="Maximum Uploads Per Day"
              type="number"
              value={form.upload.uploadsPerDay}
              onChange={(e) =>
                updateSetting("upload", "uploadsPerDay", Number(e.target.value))
              }
            />

            <Input
              label="Allowed File Types"
              className="md:col-span-2"
              value={form.upload.allowedTypes.join(", ")}
              onChange={(e) =>
                updateSetting(
                  "upload",
                  "allowedTypes",
                  e.target.value
                    .split(",")
                    .map((type) => type.trim())
                    .filter(Boolean),
                )
              }
            />
          </div>
        </SettingsSection>

        {/* Security Settings */}

        <SettingsSection title="Security Settings">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Minimum Password Length"
              type="number"
              value={form.security.passwordLength}
              onChange={(e) =>
                updateSetting(
                  "security",
                  "passwordLength",
                  Number(e.target.value),
                )
              }
            />

            <Input
              label="Maximum Login Attempts"
              type="number"
              value={form.security.loginAttempts}
              onChange={(e) =>
                updateSetting(
                  "security",
                  "loginAttempts",
                  Number(e.target.value),
                )
              }
            />
          </div>
        </SettingsSection>

        <div className="flex justify-end">
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
