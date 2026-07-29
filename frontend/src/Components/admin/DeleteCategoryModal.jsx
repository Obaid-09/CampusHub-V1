import Button from "../ui/Button";

const DeleteCategoryModal = ({ open, onClose, onDelete, category }) => {
  if (!open || !category) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        p-6
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          bg-white
          p-8
        "
      >
        <h2
          className="
            text-2xl
            font-heading
            font-bold
            text-red-600
          "
        >
          Delete Category
        </h2>

        <p className="mt-4 text-gray500">
          Are you sure you want to delete
          <span className="font-semibold text-secondary"> {category.name}</span>
          ?
        </p>

        <p className="mt-2 text-sm text-red-500">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="danger" onClick={() => onDelete(category)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategoryModal;
