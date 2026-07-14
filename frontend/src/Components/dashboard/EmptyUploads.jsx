import { FolderPlus } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const EmptyUploads = () => {

    return (

        <div
            className="
                py-24
                text-center
            "
        >

            <FolderPlus
                size={72}
                className="
                    mx-auto
                    text-primary
                "
            />

            <h2
                className="
                    mt-6
                    text-4xl
                    font-heading
                    font-bold
                    text-secondary
                "
            >

                No Uploads Yet

            </h2>

            <p
                className="
                    mt-4
                    text-gray600
                "
            >

                Upload your first resource to help other students.

            </p>

            <Link to="/upload">

                <Button className="mt-8">

                    Upload Resource

                </Button>

            </Link>

        </div>

    );

};

export default EmptyUploads;