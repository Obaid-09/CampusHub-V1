import Button from "../ui/Button";
import SettingsSection from "./SettingsSection";

const Danger = () => {
  return (
    <SettingsSection title="Danger Zone">
      <div
        className="
                    rounded-2xl
                    border
                    border-red-200
                    bg-red-50
                    p-6

                    flex
                    flex-col
                    md:flex-row

                    justify-between
                    items-center

                    gap-6
                "
      >
        <div>
          <h3
            className="
                            text-xl
                            font-semibold
                            text-red-700
                        "
          >
            Delete Account
          </h3>

          <p
            className="
                            mt-2
                            text-red-600
                        "
          >
            Permanently remove your account and all uploaded resources.
          </p>
        </div>

        <Button
          variant="outline"
          className="
                    border-red-500
                    text-red-600

                    hover:bg-red-50
                    "
        >
          Delete Account
        </Button>
      </div>
    </SettingsSection>
  );
};

export default Danger;
