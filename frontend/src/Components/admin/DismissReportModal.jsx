import { useState } from "react";

import Button from "../ui/Button";
import Textarea from "../ui/Textarea";

const DismissReportModal = ({
    open,
    report,
    onClose,
    onDismiss,
}) => {

    const [reason, setReason] = useState("");

    if (!open || !report) return null;

    return (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">

            <div className="bg-white rounded-3xl w-full max-w-lg p-8">

                <h2
                    className="
                        text-2xl
                        font-heading
                        font-bold
                        text-danger
                    "
                >

                    Dismiss Report

                </h2>

                <p className="mt-3 text-gray500">

                    This report will be closed without taking any moderation action.

                </p>

                <div className="mt-6">

                    <Textarea

                        label="Dismiss Reason"

                        placeholder="Optional"

                        value={reason}

                        onChange={(e)=>setReason(e.target.value)}

                    />

                </div>

                <div className="flex justify-end gap-3 mt-8">

                    <Button
                        variant="outline"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="danger"
                        onClick={() => {

                            onDismiss(reason);

                            setReason("");

                        }}
                    >

                        Dismiss

                    </Button>

                </div>

            </div>

        </div>

    );

};

export default DismissReportModal;
