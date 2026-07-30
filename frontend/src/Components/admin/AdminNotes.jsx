import Textarea from "../ui/TextArea";

const AdminNotes = () => {
  return (
    <div
      className="
                bg-background
                rounded-2xl
                p-6
            "
    >
      <Textarea
        label="Admin Notes"
        placeholder="Write internal moderation notes..."
      />
    </div>
  );
};

export default AdminNotes;
