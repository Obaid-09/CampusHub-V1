import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActionCard = ({ action }) => {

    const navigate = useNavigate();

    return (

        <div

            onClick={() =>
                navigate(action.route)
            }

            className="
                cursor-pointer

                bg-white

                rounded-2xl

                border
                border-gray100

                shadow-card

                p-6

                hover:-translate-y-1
                hover:shadow-xl

                transition-all
            "

        >

            <h3

                className="
                    text-xl
                    font-semibold
                    text-secondary
                "

            >

                {action.title}

            </h3>

            <p

                className="
                    mt-2
                    text-gray500
                "

            >

                {action.subtitle}

            </p>

            <div

                className="
                    mt-6

                    flex
                    justify-end
                "

            >

                <ChevronRight
                    className="text-primary"
                />

            </div>

        </div>

    );

};

export default QuickActionCard;
