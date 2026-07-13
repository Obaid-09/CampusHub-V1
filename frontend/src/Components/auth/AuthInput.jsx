const AuthInput = ({
    label,
    disabled,
    ...props
}) => {

    return (

        <div className="space-y-2">

            <label className="block text-gray200 font-medium">
                {label}
            </label>

            <input
                disabled={disabled}
                {...props}
                className="
                    w-full
                    h-14

                    px-5

                    rounded-xl

                    bg-white/5

                    border border-white/10

                    text-white

                    placeholder:text-gray500

                    outline-none

                    transition-all

                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/30
                "
            />

        </div>

    );

};

export default AuthInput;