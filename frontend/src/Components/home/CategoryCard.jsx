import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({
    title,
    count,
    color,
    iconColor,
    icon: Icon,
}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/resources?type=${encodeURIComponent(title)}`);
    };

    return (

        <div
            onClick={handleClick}
            className="
                group
                bg-white
                rounded-2xl
                p-6
                shadow-card
                border
                border-gray100
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
                cursor-pointer
            "
        >

            <div
                className={`
                    w-16
                    h-16
                    rounded-2xl
                    ${color}
                    flex
                    items-center
                    justify-center
                `}
            >
                <Icon
                    size={30}
                    className={iconColor}
                />
            </div>

            <h3 className="mt-6 text-2xl font-heading font-semibold text-secondary">
                {title}
            </h3>

            <p className="mt-2 text-gray500">
                {count} Resources
            </p>

            <div
                className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-primary
                    font-medium
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                "
            >
                Explore
                <ArrowRight size={18}/>
            </div>

        </div>

    );
};

export default CategoryCard;