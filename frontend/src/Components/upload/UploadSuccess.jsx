import { CheckCircle } from "lucide-react";
import Button from "../ui/Button";

const UploadSuccess = ({
    onUploadAgain,
}) => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                shadow-card
                p-10
                text-center
            "
        >
            <CheckCircle
                size={70}
                className="mx-auto text-success"
            />

            <h2
                className="
                    mt-5
                    text-3xl
                    font-heading
                    font-bold
                    text-secondary
                "
            >
                Upload Successful
            </h2>

            <p className="mt-3 text-gray500">
                Your resource is ready for review.
            </p>

            <Button
                className="mt-8"
                onClick={onUploadAgain}
            >
                Upload Another
            </Button>
        </div>
    );
};

export default UploadSuccess;