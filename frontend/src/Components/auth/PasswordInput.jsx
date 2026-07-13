import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordInput = ({
    label,
    ...props
}) => {

    const [show, setShow] = useState(false);

    return (

        <div>

            <label
                className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray200
                "
            >
                {label}
            </label>

            <div className="relative">

                <input

                    type={
                        show
                            ? "text"
                            : "password"
                    }

                    {...props}

                    className="
                        w-full
                        px-4
                        py-3
                        pr-12

                        rounded-xl

                        bg-white/5

                        border
                        border-white/10

                        text-gray-300

                        placeholder:text-gray400

                        outline-none

                        focus:border-primary

                        focus:ring-2
                        focus:ring-primary/30
                    "

                />

                <button

                    type="button"

                    onClick={() =>
                        setShow(!show)
                    }

                    className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-gray400
                    "

                >

                    {show
                        ? <EyeOff size={20}/>
                        : <Eye size={20}/>
                    }

                </button>

            </div>

        </div>

    );

};

export default PasswordInput;