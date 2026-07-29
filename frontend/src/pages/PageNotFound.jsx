import { useNavigate } from "react-router-dom";
import Button from "../Components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

const PageNotFound = () => {

    const navigate = useNavigate();

    return (

        <div
            className="
                min-h-screen
                bg-background
                flex
                items-center
                justify-center
                px-6
            "
        >

            <div
                className="
                    max-w-2xl
                    text-center
                "
            >

                <h1
                    className="
                        text-8xl
                        font-heading
                        font-bold
                        text-primary
                    "
                >
                    404
                </h1>

                <h2
                    className="
                        mt-6
                        text-4xl
                        font-heading
                        font-bold
                        text-secondary
                    "
                >
                    Page Not Found
                </h2>

                <p
                    className="
                        mt-5
                        text-lg
                        text-gray500
                        leading-relaxed
                    "
                >
                    The page you're looking for doesn't exist or may have been moved.
                </p>

                <div
                    className="
                        mt-10
                        flex
                        justify-center
                        gap-4
                    "
                >

                    <Button
                        onClick={() => navigate("/")}
                    >
                        <Home size={18}/>
                        Home
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft size={18}/>
                        Go Back
                    </Button>

                </div>

            </div>

        </div>

    );

};

export default PageNotFound;