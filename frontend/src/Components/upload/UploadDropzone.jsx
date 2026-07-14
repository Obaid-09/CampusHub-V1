import { useRef } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import Button from "../ui/Button";

const UploadDropzone = ({
    file,
    setFile,
    editMode
}) => {

    const inputRef = useRef(null);

    const handleFile = (selectedFile) => {
        if (!selectedFile) return;
        setFile(selectedFile);
    };

    return (

        <div
            className="
                bg-white
                rounded-3xl
                border-2
                border-dashed
                border-primary/30
                shadow-card
                p-10
                text-center
            "
        >

            <input
                ref={inputRef}
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) =>
                    handleFile(e.target.files[0])
                }
            />

            {!file ? (
                <>
                    <UploadCloud
                        size={52}
                        className="mx-auto text-primary"
                    />

                    <h2 className="mt-4 text-2xl font-heading font-bold text-secondary">
                        Upload PDF
                    </h2>

                    <p className="mt-2 text-gray500">
                        PDF only • Max 20 MB
                    </p>

                    <Button
                        className="mt-6"
                        onClick={() => inputRef.current.click()}
                    >
                        {editMode
                            ? "Replace PDF"
                            : "Browse PDF"}
                    </Button>
                </>
            ) : (

                <div className="space-y-5">
                    <FileText
                        size={52}
                        className="mx-auto text-primary"
                    />

                    <div>
                        <h3 className="font-semibold text-secondary">
                            {file.name}
                        </h3>

                        <p className="text-gray500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                    </div>

                    <Button
                        variant="outline"
                        onClick={() => setFile(null)}
                    >
                        <X size={16}/>
                        Remove File
                    </Button>
                </div>
            )}
        </div>
    );
};

export default UploadDropzone;