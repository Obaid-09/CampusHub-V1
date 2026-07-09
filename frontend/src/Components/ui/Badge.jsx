const variants = {
    primary: "bg-primaryLight text-primary",
    secondary: "bg-secondary text-white",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
    gray: "bg-gray100 text-gray700",
};

const Badge = ({
    children,
    variant = "primary",
    className = "",
}) => {
    return (
        <span
            className={`
                inline-flex
                items-center
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                ${variants[variant]}
                ${className}
            `}
        >
            {children}
        </span>
    );
};

export default Badge;