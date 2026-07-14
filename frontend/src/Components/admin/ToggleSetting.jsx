import { useState } from "react";

const ToggleSetting = ({
    label,
    description,
}) => {

    const [enabled,setEnabled] = useState(false);

    return (

        <div
            className="
                flex
                justify-between
                items-center
                py-3
            "
        >

            <div>

                <h3
                    className="
                        font-semibold
                        text-secondary
                    "
                >

                    {label}

                </h3>

                <p className="text-gray500">

                    {description}

                </p>

            </div>

            <button

                onClick={()=>
                    setEnabled(!enabled)
                }

                className={`
                    relative
                    w-14
                    h-8
                    rounded-full
                    transition-all

                    ${
                        enabled

                        ?

                        "bg-primary"

                        :

                        "bg-gray300"

                    }
                `}

            >

                <span

                    className={`
                        absolute
                        top-1
                        left-1

                        w-6
                        h-6

                        rounded-full
                        bg-white

                        transition-all

                        ${
                            enabled

                            ?

                            "translate-x-6"

                            :

                            ""

                        }

                    `}

                />

            </button>

        </div>

    );

};

export default ToggleSetting;