import { ChevronDown } from "lucide-react";

const Select = ({
    label,
    error,
    options = [],
    className = "",
    ...props
}) => {
    return (
        <div className="w-full">

            {label && (
                <label className="block mb-2 text-sm font-medium text-secondary">
                    {label}
                </label>
            )}

            <div className="relative">

                <select
                    className={`
                        w-full
                        appearance-none
                        rounded-xl
                        border
                        border-gray200
                        bg-white
                        px-4
                        py-3
                        outline-none
                        transition-all
                        duration-300
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primaryLight
                        ${className}
                    `}
                    {...props}
                >

                    {options.map((option) => (

                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>

                    ))}

                </select>

                <ChevronDown
                    size={20}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray500 pointer-events-none"
                />

            </div>

            {error && (
                <p className="mt-2 text-sm text-danger">
                    {error}
                </p>
            )}

        </div>
    );
};

export default Select;