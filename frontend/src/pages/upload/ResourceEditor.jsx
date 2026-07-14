import { useState } from "react";

import UploadDropzone from "../../components/upload/UploadDropzone";
import UploadForm from "../../components/upload/UploadForm";
import UploadPreview from "../../components/upload/UploadPreview";
import UploadProgress from "../../components/upload/UploadProgress";
import UploadSuccess from "../../components/upload/UploadSuccess";

const ResourceEditor = ({
    editMode = false,
    initialData = {},
}) => {

    const [file, setFile] = useState(null);

    const [form, setForm] = useState({
        title: initialData.title || "",
        description: initialData.description || "",
        subject: initialData.subject || "",
        courseCode: initialData.courseCode || "",
        branch: initialData.branch || "",
        type: initialData.type || "Notes",
        tags: initialData.tags || [],
    });

    const [progress] = useState(0);

    const [success] = useState(false);

    return (

        <section className="bg-background min-h-screen py-12">

            <div className="max-w-5xl mx-auto px-6">

                <div className="mb-10">

                    <h1
                        className="
                            text-5xl
                            font-heading
                            font-bold
                            text-secondary
                        "
                    >

                        {editMode
                            ? "Edit Resource"
                            : "Upload Resource"}

                    </h1>

                    <p className="mt-4 text-gray600">

                        {editMode
                            ? "Update your study resource."
                            : "Share notes, books and PYQs."}

                    </p>

                </div>

                <UploadDropzone

                    file={file}

                    setFile={setFile}

                    editMode={editMode}

                />

                <div className="mt-10">

                    <UploadForm

                        form={form}

                        setForm={setForm}

                        editMode={editMode}

                    />

                </div>

                {file && (

                    <UploadPreview

                        file={file}

                        form={form}

                    />

                )}

                {progress > 0 && (

                    <UploadProgress

                        progress={progress}

                    />

                )}

                {success && (

                    <UploadSuccess />

                )}

            </div>

        </section>

    );

};

export default ResourceEditor;