import Button from "../ui/Button";
import Select from "../ui/Select";

const roles = [
  {
    value: "student",
    label: "Student",
  },
  {
    value: "contributor",
    label: "Contributor",
  },
  {
    value: "moderator",
    label: "Moderator",
  },
  {
    value: "admin",
    label: "Admin",
  },
];

const PromoteUserModal = ({ open, onClose, role, setRole, onPromote }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-heading font-bold">Change User Role</h2>

        <div className="mt-6">
          <Select
            value={role}
            options={roles}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={onPromote}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default PromoteUserModal;
