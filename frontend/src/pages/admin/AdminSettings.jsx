import AdminLayout from "../../components/admin/AdminLayout";
import SettingsSection from "../../components/admin/SettingsSection";
import ToggleSetting from "../../components/admin/ToggleSetting";
import SecuritySettings from "../../Components/admin/SecuritySettings";
import UploadSettings from "../../Components/admin/UploadSettings";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import BackupSettings from "../../components/admin/BackupSettings";
import EmailSettings from "../../components/admin/EmailSettings";
import DangerZone from "../../components/admin/DangerZone";
const AdminSettings = () => {

    return (

        <AdminLayout>

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

                        Admin Settings

                    </h1>

                    <p className="mt-2 text-gray600">

                        Configure the CampusHub platform.

                    </p>

                </div>

                <SettingsSection
                    title="General Settings"
                >

                    <div className="grid md:grid-cols-2 gap-6">

                        <Input
                            label="Platform Name"
                            value="CampusHub"
                        />

                        <Input
                            label="Support Email"
                            value="admin@campushub.com"
                        />

                    </div>

                </SettingsSection>

                <SettingsSection
                    title="Platform Settings"
                >

                    <ToggleSetting
                        label="Maintenance Mode"
                        description="Temporarily disable the platform."
                    />

                    <ToggleSetting
                        label="Allow Registration"
                        description="Allow new users to create accounts."
                    />

                    <ToggleSetting
                        label="Auto Approve Resources"
                        description="Automatically publish uploaded resources."
                    />

                </SettingsSection>


                <SettingsSection
                    title="Upload Settings"
                >

                    <UploadSettings/>

                </SettingsSection>

                <SettingsSection
                    title="Security Settings"
                >

                    <SecuritySettings/>

                </SettingsSection>

                <SettingsSection
                      title="Platform Controls"
                  >

                      <ToggleSetting

                          label="Enable Resource Approval"

                          description="Every uploaded resource requires admin approval."

                      />

                      <ToggleSetting

                          label="Allow Guest Access"

                          description="Visitors can browse public resources without logging in."

                      />

                      <ToggleSetting

                          label="Enable User Reports"

                          description="Allow users to report inappropriate resources."

                      />

                      <ToggleSetting

                          label="Enable Email Notifications"

                          description="Send system emails for approvals and account updates."

                      />

                  </SettingsSection>

                <SettingsSection
                    title="Backup & Export"
                >

                    <BackupSettings/>

                </SettingsSection>

                <SettingsSection
                    title="Email Configuration"
                >

                    <EmailSettings/>

                </SettingsSection>

                <SettingsSection
                    title="Danger Zone"
                >

                    <DangerZone/>

                </SettingsSection>

                <div className="flex justify-end">

                    <Button>

                        Save Changes

                    </Button>

                </div>

            </div>

        </AdminLayout>

    );

};

export default AdminSettings;
