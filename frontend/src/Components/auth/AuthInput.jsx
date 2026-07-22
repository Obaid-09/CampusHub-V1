const AuthInput = ({
    label,
    disabled,
    className = "",
    ...props
}) => {
    return (
        <div className="space-y-2">
            <label className="block font-medium text-gray-700">
                {label}
            </label>

            <input
                disabled={disabled}
                {...props}
                className={`
                    w-full
                    h-14
                    px-5
                    rounded-xl
                    border
                    outline-none
                    transition-all
                    ${className}
                `}
            />
        </div>
    );
};
export default AuthInput;
