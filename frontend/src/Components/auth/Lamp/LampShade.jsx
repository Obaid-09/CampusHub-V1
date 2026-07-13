const LampShade = ({ isOn }) => {
    return (
        <div className="relative flex justify-center">

            {/* Shade */}

            <div
                className={`
                    w-40
                    h-14
                    rounded-t-full
                    rounded-b-xl
                    border-b-4
                    transition-all
                    duration-500

                    ${
                        isOn
                            ? "bg-neutral-700 border-yellow-300"
                            : "bg-neutral-800 border-neutral-600"
                    }
                `}
            />

        </div>
    );
};

export default LampShade;