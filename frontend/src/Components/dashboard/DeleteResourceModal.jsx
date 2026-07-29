import Button from "../ui/Button";

const DeleteResourceModal = ({
  open,
  onClose,
  onConfirm,
  deleting = false,
}) => {
  if (!open) return null;

  return (
    <div
      className="
                fixed
                inset-0
                bg-black/50
                flex
                justify-center
                items-center
                z-50
            "
    >
      <div
        className="
                    bg-white
                    rounded-2xl
                    p-8
                    w-[420px]
                "
      >
        <h2
          className="
                        text-2xl
                        font-heading
                        font-bold
                    "
        >
          Delete Resource?
        </h2>

        <p
          className="
                        mt-3
                        text-gray600
                    "
        >
          This action cannot be undone.
        </p>

        <div
          className="
                        flex
                        gap-4
                        mt-8
                    "
        >
          <Button
            variant="outline"
            className="flex-1"
            onClick={onClose}
            disabled={deleting}
          >
            Cancel
          </Button>

          <Button
            className="
                            flex-1
                            bg-red-600
                        "
            onClick={onConfirm}
            disabled={deleting}
          >
            {deleting ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteResourceModal;
