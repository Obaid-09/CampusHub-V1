const LampBulb = ({ isOn }) => {
    return (
        <div
            className="
                absolute
                top-14
                w-7
                h-7
                left-1/2
                -translate-x-1/2
                z-20
            "
        >
            <div
                className={`
                    w-6
                    h-6
                    rounded-full
                    transition-all
                    duration-500

                    ${
                        isOn
                            ? "bg-yellow-300 shadow-[0_0_40px_15px_rgba(255,220,120,.8)]"
                            : "bg-neutral-500"
                    }
                `}
            />
        </div>
    );
};

export default LampBulb;