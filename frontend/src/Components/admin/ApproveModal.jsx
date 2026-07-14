import Modal from "../ui/Modal";
import Button from "../ui/Button";

const ApproveModal = ({
    open,
    onClose,
    onApprove,
}) => {

    return (

        <Modal open={open} onClose={onClose}>

            <h2
                className="
                    text-2xl
                    font-heading
                    font-bold
                "
            >

                Approve Resource?

            </h2>

            <p className="mt-3 text-gray500">

                This resource will immediately become available to all students.

            </p>

            <div
                className="
                    mt-8
                    flex
                    justify-end
                    gap-3
                "
            >

                <Button
                    variant="outline"
                    onClick={onClose}
                >

                    Cancel

                </Button>

                <Button
                    onClick={onApprove}
                >

                    Approve

                </Button>

            </div>

        </Modal>

    );

};

export default ApproveModal;