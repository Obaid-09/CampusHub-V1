const Avatar = ({
    src,
    alt = "Avatar",
    size = "md",
}) => {

    const sizes = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-14 h-14",
        xl: "w-20 h-20",
    };

    return (
        <img
            src={
                src ||
                "https://ui-avatars.com/api/?background=C87740&color=fff"
            }
            alt={alt}
            className={`
                ${sizes[size]}
                rounded-full
                object-cover
                border-2
                border-primaryLight
            `}
        />
    );
};

export default Avatar;