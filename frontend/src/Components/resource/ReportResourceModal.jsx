import { useState, useEffect } from "react";
import Button from "../ui/Button";
import Select from "../ui/Select";

const reasonOptions = [
  { value: "Spam", label: "Spam" },
  { value: "Copyright", label: "Copyright" },
  { value: "Wrong Subject", label: "Wrong Subject" },
  { value: "Duplicate", label: "Duplicate" },
  { value: "Low Quality", label: "Low Quality" },
  { value: "Other", label: "Other" },
];

const ReportResourceModal = ({ open, onClose, onSubmit }) => {
  const [reason, setReason] = useState("Spam");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setReason("Spam");
      setDescription("");
      setLoading(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await onSubmit({
        reason,
        description: description.trim(),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">
        <h2 className="text-3xl font-heading font-bold text-secondary">
          Report Resource
        </h2>

        <p className="mt-2 text-gray500">
          Help us maintain the quality of CampusHub by reporting inappropriate
          or incorrect resources.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block font-medium text-secondary">
              Reason
            </label>

            <Select
              value={reason}
              options={reasonOptions}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-secondary">
              Description (Optional)
            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide additional details about this report..."
              className="
                w-full
                rounded-xl
                border
                border-gray200
                px-4
                py-3
                outline-none
                resize-none
                focus:border-primary
              "
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>

          <Button variant="danger" onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit Report"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportResourceModal;
