import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UploadDropzone from "../../Components/upload/UploadDropzone";
import UploadForm from "../../Components/upload/UploadForm";
import UploadPreview from "../../Components/upload/UploadPreview";
import UploadProgress from "../../Components/upload/UploadProgress";
import UploadSuccess from "../../Components/upload/UploadSuccess";
import { resourceAPI } from "../../api/resource.api";
import { errorToast, successToast } from "../../utils/toast";

const ResourceEditor = ({ editMode = false, initialData = {} }) => {
  const [file, setFile] = useState(null);

  const [form, setForm] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    subject: initialData.subject || "",
    courseCode: initialData.courseCode || "",
    branch: initialData.branch || "",
    semester: initialData.semester || "",
    year: initialData.year || "",
    type: initialData.type || "",
    tags: initialData.tags || [],
  });

  const [progress, setProgress] = useState(0);

  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const submitResource = async () => {
    if (!editMode && !file) {
      errorToast("Please select a PDF to upload.");
      return;
    }

    const requiredFields = [
      "title",
      "subject",
      "branch",
      "semester",
      "year",
      "type",
    ];
    if (requiredFields.some((field) => !String(form[field] ?? "").trim())) {
      errorToast("Please complete all required resource details.");
      return;
    }

    try {
      setSubmitting(true);
      setProgress(10);
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, key === "tags" ? value.join(",") : value);
      });
      if (file) formData.append("pdf", file);

      const response = editMode
        ? await resourceAPI.updateResource(initialData._id, formData)
        : await resourceAPI.uploadResource(formData);

      setProgress(100);
      if (!editMode) {
        setFile(null);
        setForm({
          title: "",
          description: "",
          subject: "",
          courseCode: "",
          branch: "",
          semester: "",
          year: "",
          type: "Notes",
          tags: [],
        });
      }
      setSuccess(true);
      successToast(response.data.message);
    } catch (error) {
      setProgress(0);
      errorToast(
        error.response?.data?.message || "Could not save this resource.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const uploadAnother = () => {
    setFile(null);
    setForm({
      title: "",
      description: "",
      subject: "",
      courseCode: "",
      branch: "",
      semester: "",
      year: "",
      type: "Notes",
      tags: [],
    });
    setProgress(0);
    setSuccess(false);
  };

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
            {editMode ? "Edit Resource" : "Upload Resource"}
          </h1>

          <p className="mt-4 text-gray600">
            {editMode
              ? "Update your study resource."
              : "Share notes, books and PYQs."}
          </p>
        </div>

        {!success && (
          <>
            <UploadDropzone file={file} setFile={setFile} editMode={editMode} />

            <div className="mt-10">
              <UploadForm
                form={form}
                setForm={setForm}
                editMode={editMode}
                onSubmit={submitResource}
                submitting={submitting}
              />
            </div>

            {file && <UploadPreview file={file} form={form} />}

            {progress > 0 && <UploadProgress progress={progress} />}
          </>
        )}

        {success && (
          <UploadSuccess
            editMode={editMode}
            onUploadAgain={
              editMode
                ? () => navigate(`/resources/${initialData._id}`)
                : uploadAnother
            }
          />
        )}
      </div>
    </section>
  );
};

export default ResourceEditor;
