import Button from "../ui/Button";

const DeleteCategoryModal = ({
    open,
    onClose,
    onDelete,
    category,
}) => {

    if(!open) return null;

    return(

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

            <div className="bg-white rounded-3xl p-8 max-w-md w-full">

                <h2 className="text-2xl font-heading font-bold text-danger">

                    Delete Category

                </h2>

                <p className="mt-4 text-gray500">

                    Delete

                    <span className="font-semibold">

                        {" "}{category}

                    </span>

                    ?

                </p>

                <div className="flex justify-end gap-3 mt-8">

                    <Button
                        variant="outline"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="danger"
                        onClick={onDelete}
                    >
                        Delete
                    </Button>

                </div>

            </div>

        </div>

    );

};

export default DeleteCategoryModal;