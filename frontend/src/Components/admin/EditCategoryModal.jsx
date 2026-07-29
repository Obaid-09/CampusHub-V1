import { useEffect, useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";

const EditCategoryModal = ({ open, onClose, category, onSave }) => {
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (category) {
      setName(category.name || "");
      setIsActive(category.isActive);
    }
  }, [category]);

  const handleSubmit = () => {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    onSave({
      name: trimmedName,
      isActive,
    });
  };

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
            text-secondary
          "
        >
          Edit Category
        </h2>

        <p className="mt-2 text-gray500">Update the category information.</p>

        <div className="mt-6 space-y-6">
          <Input
            label="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div>
            <label className="block mb-2 font-medium text-secondary">
              Status
            </label>

            <select
              value={isActive ? "true" : "false"}
              onChange={(e) => setIsActive(e.target.value === "true")}
              className="
                w-full
                rounded-xl
                border
                border-gray200
                px-4
                py-3
                outline-none
                focus:border-primary
              "
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={handleSubmit}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default EditCategoryModal;
