import { useState } from "react";
import Button from "../ui/Button";
import Textarea from "../ui/TextArea";

const SuspendUserModal = ({ open, onClose, onConfirm }) => {
  const [reason, setReason] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-heading font-bold">Suspend User</h2>

        <Textarea
          label="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-8">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="danger" onClick={() => onConfirm(reason)}>
            Suspend
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuspendUserModal;
