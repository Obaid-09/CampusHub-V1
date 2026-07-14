import { useState } from "react";

import SettingsSection from "./SettingsSection";
import ToggleSwitch from "./ToggleSwitch";

const PreferenceSettings = () => {

    const [preferences, setPreferences] = useState({

        emailNotifications: true,

        resourceUpdates: true,

        publicProfile: true,

    });

    const update = (key, value) => {

        setPreferences((prev) => ({

            ...prev,

            [key]: value,

        }));

    };

    return (

        <SettingsSection title="Preferences">

            <div className="space-y-8">

                <PreferenceItem

                    title="Email Notifications"

                    description="Receive important account notifications by email."

                    checked={preferences.emailNotifications}

                    onChange={(value)=>
                        update("emailNotifications", value)
                    }

                />

                <PreferenceItem

                    title="Resource Updates"

                    description="Get notified about downloads, reviews and approvals."

                    checked={preferences.resourceUpdates}

                    onChange={(value)=>
                        update("resourceUpdates", value)
                    }

                />

                <PreferenceItem

                    title="Public Profile"

                    description="Allow other students to view your public profile."

                    checked={preferences.publicProfile}

                    onChange={(value)=>
                        update("publicProfile", value)
                    }

                />

            </div>

        </SettingsSection>

    );

};

const PreferenceItem = ({
    title,
    description,
    checked,
    onChange,
}) => (

    <div
        className="
            flex
            items-center
            justify-between
            gap-6
            py-6

            border-b
            border-gray100

            last:border-none
        "
    >

        <div>

            <h3
                className="
                    text-lg
                    font-semibold
                    text-secondary
                "
            >

                {title}

            </h3>

            <p className="text-gray500 mt-1">

                {description}

            </p>

        </div>

        <ToggleSwitch

            checked={checked}

            onChange={onChange}

        />

    </div>

);

export default PreferenceSettings;