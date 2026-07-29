import { useState } from "react";

import Modal from "../ui/Modal";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

const RejectModal = ({ open, onClose, onReject }) => {
  const [reason, setReason] = useState("");

  return (
    <Modal open={open} onClose={onClose}>
      <h2
        className="
                    text-2xl
                    font-heading
                    font-bold
                "
      >
        Reject Resource
      </h2>

      <Textarea
        label="Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <div
        className="
                    mt-8
                    flex
                    justify-end
                    gap-3
                "
      >
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>

        <Button variant="danger" onClick={() => onReject(reason)}>
          Reject
        </Button>
      </div>
    </Modal>
  );
};

export default RejectModal;
