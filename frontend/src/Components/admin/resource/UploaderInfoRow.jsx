const UploaderInfoRow = ({
    label,
    value,
}) => {

    return (

        <div
            className="
                flex
                justify-between
                py-2
            "
        >

            <span className="text-gray500">

                {label}

            </span>

            <span
                className="
                    font-medium
                    text-secondary
                "
            >

                {value}

            </span>

        </div>

    );

};

export default UploaderInfoRow;