import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Select from "../ui/Select";
import Button from "../ui/Button";
import TagInput from "./TagInput";

const branches = [
    { value: "CSE", label: "CSE" },
    { value: "EEE", label: "EEE" },
    { value: "ECE", label: "ECE" },
    { value: "ME", label: "Mechanical" },
];

const resourceTypes = [
    { value: "Notes", label: "Notes" },
    { value: "PYQ", label: "PYQ" },
    { value: "Assignment", label: "Assignment" },
    { value: "Lab Manual", label: "Lab Manual" },
    { value: "Book", label: "Book" },
];

const UploadForm = ({
    form,
    setForm,
    editMode = false,
    onSubmit,
    submitting = false,
}) => {

    const update = (key, value) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (

        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit?.();
            }}
            className="
                mt-8
                bg-white
                rounded-2xl
                shadow-card
                p-8
                space-y-6
            "
        >

            <Input
                label="Title"
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
            />

            <Textarea
                label="Description"
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
            />

            <div className="grid md:grid-cols-2 gap-6">

                <Input
                    label="Subject"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                />

                <Input
                    label="Course Code"
                    value={form.courseCode}
                    onChange={(e) => update("courseCode", e.target.value)}
                />

                <Select
                    label="Branch"
                    value={form.branch}
                    options={branches}
                    onChange={(e) => update("branch", e.target.value)}
                />

                <Select
                    label="Resource Type"
                    value={form.type}
                    options={resourceTypes}
                    onChange={(e) => update("type", e.target.value)}
                />

                <Select
                    label="Semester"
                    value={form.semester}
                    options={Array.from({ length: 8 }, (_, index) => ({ value: index + 1, label: `Semester ${index + 1}` }))}
                    onChange={(e) => update("semester", e.target.value)}
                />

                <Select
                    label="Year"
                    value={form.year}
                    options={Array.from({ length: 4 }, (_, index) => ({ value: index + 1, label: `Year ${index + 1}` }))}
                    onChange={(e) => update("year", e.target.value)}
                />

            </div>

            <TagInput
                tags={form.tags || []}
                setTags={(tags) => update("tags", tags)}
            />

            <Button className="w-full" type="submit" disabled={submitting}>

                {submitting
                    ? (editMode ? "Saving..." : "Uploading...")
                    : editMode
                    ? "Save Changes"
                    : "Upload Resource"}

            </Button>

        </form>

    );

};

export default UploadForm;
