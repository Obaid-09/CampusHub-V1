import { FolderOpen } from "lucide-react";
import Button from "../ui/Button";

const EmptyResources = ({
    onReset,
}) => {

    return (

        <div
            className="
                flex
                flex-col
                items-center
                justify-center
                py-20
                text-center
            "
        >

            <FolderOpen
                size={72}
                className="text-primary"
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
                No Resources Found
            </h2>

            <p
                className="
                    mt-4
                    text-gray600
                    max-w-md
                "
            >
                Try changing your search or filters.
            </p>

            <Button
                className="mt-8"
                onClick={onReset}
            >
                Reset Filters
            </Button>

        </div>

    );

};

export default EmptyResources;