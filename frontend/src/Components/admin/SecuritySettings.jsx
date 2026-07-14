import Select from "../ui/Select";
import ToggleSetting from "./ToggleSetting";

const SecuritySettings = () => {

    return (

        <div className="space-y-6">

            <Select

                label="Session Timeout"

                options={[

                    {

                        value:"30",

                        label:"30 Minutes",

                    },

                    {

                        value:"60",

                        label:"1 Hour",

                    },

                    {

                        value:"120",

                        label:"2 Hours",

                    },

                    {

                        value:"never",

                        label:"Never",

                    },

                ]}

            />

            <Select

                label="Password Policy"

                options={[

                    {

                        value:"basic",

                        label:"Basic",

                    },

                    {

                        value:"medium",

                        label:"Medium",

                    },

                    {

                        value:"strong",

                        label:"Strong",

                    },

                ]}

            />

            <ToggleSetting

                label="Require Verified Email"

                description="Users must verify their email before accessing CampusHub."

            />

            <ToggleSetting

                label="Two-Factor Authentication"

                description="Require 2FA for admin accounts."

            />

            <ToggleSetting

                label="Limit Failed Login Attempts"

                description="Temporarily lock accounts after repeated failed logins."

            />

        </div>

    );

};

export default SecuritySettings;