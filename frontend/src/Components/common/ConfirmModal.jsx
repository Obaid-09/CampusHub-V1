import Button from "../ui/Button";

const ConfirmModal = ({

    open,

    title,

    description,

    confirmText = "Confirm",

    cancelText = "Cancel",

    confirmVariant = "danger",

    onConfirm,

    onCancel,

}) => {

    if (!open) return null;

    return (

        <div

            className="
                fixed
                inset-0

                z-50

                bg-black/60

                flex
                items-center
                justify-center

                p-6
            "

        >

            <div

                className="
                    bg-white

                    rounded-3xl

                    shadow-xl

                    w-full

                    max-w-lg

                    p-8
                "

            >

                <h2

                    className="
                        text-3xl

                        font-heading

                        font-bold

                        text-secondary
                    "

                >

                    {title}

                </h2>

                <p

                    className="
                        mt-4

                        text-gray500

                        leading-relaxed
                    "

                >

                    {description}

                </p>

                <div

                    className="
                        mt-10

                        flex

                        justify-end

                        gap-4
                    "

                >

                    <Button

                        variant="outline"

                        onClick={onCancel}

                    >

                        {cancelText}

                    </Button>

                    <Button

                        variant={confirmVariant}

                        onClick={onConfirm}

                    >

                        {confirmText}

                    </Button>

                </div>

            </div>

        </div>

    );

};

export default ConfirmModal;