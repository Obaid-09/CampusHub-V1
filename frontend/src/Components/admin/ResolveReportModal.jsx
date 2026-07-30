import { useState } from "react";

import Button from "../ui/Button";
import Textarea from "../ui/TextArea";

const ResolveReportModal = ({ open, report, onClose, onResolve }) => {
  const [notes, setNotes] = useState("");

  if (!open || !report) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl w-full max-w-lg p-8">
        <h2
          className="
                        text-2xl
                        font-heading
                        font-bold
                        text-secondary
                    "
        >
          Resolve Report
        </h2>

        <p className="mt-3 text-gray500">
          Mark this report as resolved and optionally leave moderation notes.
        </p>

        <div className="mt-6">
          <Textarea
            label="Resolution Notes"
            placeholder="Explain the action taken..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button
            onClick={() => {
              onResolve(notes);

              setNotes("");
            }}
          >
            Resolve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResolveReportModal;
