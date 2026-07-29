import UploadDropzone from "../upload/UploadDropzone";
import UploadForm from "../upload/UploadForm";
import Button from "../ui/Button";

const EditResourceForm = ({ resource }) => {
  return (
    <div
      className="
                bg-white
                rounded-3xl
                border
                border-gray100
                shadow-card
                p-8
            "
    >
      <UploadDropzone />

      <div className="mt-8">
        <UploadForm initialData={resource} editMode={true} />
      </div>

      <div
        className="
                    flex
                    justify-end
                    gap-4
                    mt-10
                "
      >
        <Button variant="outline">Cancel</Button>

        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default EditResourceForm;
