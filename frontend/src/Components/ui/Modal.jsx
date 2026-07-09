const Modal = ({
    open,
    onClose,
    children,
}) => {

    if (!open) return null;

    return (
        <div
            className="
                fixed
                inset-0
                bg-black/40
                flex
                items-center
                justify-center
                z-50
            "
            onClick={onClose}
        >
            <div
                onClick={(e) =>
                    e.stopPropagation()
                }
                className="
                    bg-white
                    rounded-2xl
                    p-6
                    shadow-xl
                    w-full
                    max-w-lg
                "
            >
                {children}
            </div>
        </div>

    );
};

export default Modal;