const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`
                relative
                w-14
                h-8
                rounded-full
                transition-all duration-300
                ${checked ? "bg-primary" : "bg-gray300"}
            `}
    >
      <span
        className={`
                    absolute
                    top-1
                    h-6
                    w-6
                    rounded-full
                    bg-white
                    transition-transform duration-300
                    ${checked ? "translate-x-7" : "translate-x-1"}
                `}
      />
    </button>
  );
};

export default ToggleSwitch;
