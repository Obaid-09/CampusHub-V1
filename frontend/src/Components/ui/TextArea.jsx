const TextArea = ({ label, error, rows = 5, className = "", ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-secondary">
          {label}
        </label>
      )}

      <textarea
        rows={rows}
        className={`
                    w-full
                    rounded-xl
                    border
                    border-gray200
                    bg-white
                    px-4
                    py-3
                    outline-none
                    resize-none
                    transition-all
                    duration-300
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primaryLight
                    ${className}
                `}
        {...props}
      />

      {error && <p className="mt-2 text-sm text-danger">{error}</p>}
    </div>
  );
};

export default TextArea;
