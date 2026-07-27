// import { useState } from "react";
// import Button from "../ui/Button";
// import Input from "../ui/Input";

// const AddCategoryModal = ({ open, onClose, onSave }) => {
//   const [name, setName] = useState("");

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
//       <div className="bg-white rounded-3xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-heading font-bold text-secondary">
//           Add Category
//         </h2>

//         <div className="mt-6">
//           <Input
//             label="Category Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="flex justify-end gap-3 mt-8">
//           <Button variant="outline" onClick={onClose}>
//             Cancel
//           </Button>

//           <Button
//             onClick={() => {
//               onSave(name);

//               setName("");
//             }}
//           >
//             Save
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCategoryModal;

import { useState, useEffect } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";

const categoryTypes = [
  {
    value: "branch",
    label: "Branch",
  },
  {
    value: "subject",
    label: "Subject",
  },
  {
    value: "resourceType",
    label: "Resource Type",
  },
];

const AddCategoryModal = ({ open, onClose, onCreate }) => {
  const [name, setName] = useState("");

  const [type, setType] = useState("branch");

  const handleSubmit = () => {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    onCreate({
      name: trimmedName,
      type,
    });
  };
  useEffect(() => {
    if (!open) {
      setName("");
      setType("branch");
    }
  }, [open]);
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl w-full max-w-md p-8">
        <h2 className="text-3xl font-heading font-bold text-secondary">
          Add Category
        </h2>

        <p className="mt-2 text-gray500">
          Create a new branch, subject or resource type.
        </p>

        <div className="mt-8 space-y-5">
          <Input
            label="Category Name"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Select
            label="Category Type"
            value={type}
            options={categoryTypes}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 mt-8">
          {/* <Button
            variant="outline"
            onClick={() => {
              setName("");
              setType("branch");
              onClose();
            }}
          >
            Cancel
          </Button> */}
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create</Button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
