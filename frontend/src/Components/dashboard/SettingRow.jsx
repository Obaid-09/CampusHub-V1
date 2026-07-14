import Button from "../ui/Button";

const SettingRow = ({
    title,
    description,
    buttonText,
    buttonVariant = "primary",
    onClick,
}) => {

    return (

        <div
            className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between

                gap-6

                py-6

                border-b
                border-gray100

                last:border-none
            "
        >

            {/* Left */}

            <div className="flex-1">

                <h3
                    className="
                        text-xl
                        font-semibold
                        text-secondary
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                        mt-2
                        text-gray500
                        leading-relaxed
                    "
                >
                    {description}
                </p>

            </div>

            {/* Right */}

            <Button
                variant={buttonVariant}
                onClick={onClick}
                className="
                    w-full
                    md:w-44
                    h-12
                    text-white
                "
            >
                {buttonText}
            </Button>

        </div>

    );

};

export default SettingRow;