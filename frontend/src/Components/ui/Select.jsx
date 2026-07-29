const Select = ({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-secondary">{label}</label>
      )}

      <select
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-xl
          border
          border-gray200
          px-4
          py-3
          focus:outline-none
          focus:ring-2
          focus:ring-primary
        "
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
