import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";

const AnalyticsHeader = ({ resource }) => {

    return (

        <div>

            <Link
                to="/dashboard/resources"
                className="
                    flex
                    items-center
                    gap-2
                    text-primary
                    mb-6
                "
            >

                <ArrowLeft size={18}/>

                Back

            </Link>

            <h1
                className="
                    text-4xl
                    font-heading
                    font-bold
                    text-secondary
                "
            >

                {resource.title}

            </h1>

            <div className="flex gap-3 mt-4">

                <Badge>

                    {resource.type}

                </Badge>

                <Badge>

                    Public

                </Badge>

            </div>

        </div>

    );

};

export default AnalyticsHeader;