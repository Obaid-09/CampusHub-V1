const ResourceInfoRow = ({
    label,
    value,
})=>{

    return(

        <div

            className="
                flex
                justify-between
                py-3
                border-b
                border-gray100
                last:border-none
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

export default ResourceInfoRow;