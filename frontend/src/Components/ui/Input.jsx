import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Input = ({
    label,
    error,
    icon: Icon,
    type = "text",
    className = "",
    ...props
}) => {

    const [showPassword, setShowPassword] =
        useState(false);

    const inputType =
        type === "password"
            ? showPassword
                ? "text"
                : "password"
            : type;

    return (
        <div className="w-full">

            {label && (
                <label className="block mb-2 text-sm font-medium text-secondary">
                    {label}
                </label>
            )}

            <div className="relative">
                {Icon && (
                    <Icon
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray500"
                    />
                )}

                <input
                    type={inputType}
                    className={`
                        w-full
                        rounded-xl
                        border
                        border-gray200
                        bg-white
                        px-4
                        py-3
                        ${Icon ? "pl-11" : ""}
                        ${type === "password" ? "pr-12" : ""}
                        outline-none
                        transition-all
                        duration-300
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primaryLight
                        ${className}
                    `}
                    {...props}
                />

                {type === "password" && (
                    <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                        onClick={() =>
                            setShowPassword(!showPassword)
                        }
                    >
                        {showPassword ? (
                            <EyeOff size={20} />
                        ) : (
                            <Eye size={20} />
                        )}
                    </button>
                )}
            </div>

            {error && (
                <p className="mt-2 text-sm text-danger">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;