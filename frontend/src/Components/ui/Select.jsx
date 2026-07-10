const Select = ({
    label,
    value,
    options,
    onChange,
    className = "",
}) => {

    return (
        <div className="space-y-2">

            {label && (
                <label className="text-sm font-medium text-secondary">
                    {label}
                </label>
            )}

            <select
                value={value}
                onChange={onChange}
                className={`
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray200
                    bg-white
                    outline-none
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/20
                    transition-all
                    ${className}
                `}
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
        </div>
    );
};

export default Select;