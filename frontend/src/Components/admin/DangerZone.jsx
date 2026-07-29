import Button from "../ui/Button";
import { Trash2, RefreshCw, ShieldAlert } from "lucide-react";

const DangerZone = () => {
  return (
    <div className="space-y-5">
      <div
        className="
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    p-5
                "
      >
        <div className="flex justify-between items-center">
          <div>
            <h3
              className="
                                font-semibold
                                text-red-700
                            "
            >
              Clear Cache
            </h3>

            <p className="text-red-500">Remove cached application data.</p>
          </div>

          <Button variant="danger" className="gap-2">
            <RefreshCw size={18} />
            Clear
          </Button>
        </div>
      </div>

      <div
        className="
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    p-5
                "
      >
        <div className="flex justify-between items-center">
          <div>
            <h3
              className="
                                font-semibold
                                text-red-700
                            "
            >
              Reset Platform Settings
            </h3>

            <p className="text-red-500">Restore default configuration.</p>
          </div>

          <Button variant="danger" className="gap-2">
            <ShieldAlert size={18} />
            Reset
          </Button>
        </div>
      </div>

      <div
        className="
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    p-5
                "
      >
        <div className="flex justify-between items-center">
          <div>
            <h3
              className="
                                font-semibold
                                text-red-700
                            "
            >
              Delete Demo Data
            </h3>

            <p className="text-red-500">
              Permanently remove all demo resources.
            </p>
          </div>

          <Button variant="danger" className="gap-2">
            <Trash2 size={18} />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DangerZone;
