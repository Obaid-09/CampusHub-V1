const ResourcePagination = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {

    if (totalPages <= 1) return null;

    return (

        <div className="flex justify-center mt-12 gap-3">

            <button
                disabled={currentPage === 1}
                onClick={() =>
                    onPageChange(currentPage - 1)
                }
                className="
                    px-4
                    py-2
                    rounded-lg
                    border
                    disabled:opacity-40
                "
            >
                Prev
            </button>

            {Array.from(
                { length: totalPages },
                (_, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            onPageChange(index + 1)
                        }
                        className={`
                            px-4
                            py-2
                            rounded-lg
                            transition-all
                            ${
                                currentPage === index + 1
                                    ? "bg-primary text-white"
                                    : "border"
                            }
                        `}
                    >
                        {index + 1}
                    </button>
                )
            )}

            <button
                disabled={
                    currentPage === totalPages
                }
                onClick={() =>
                    onPageChange(currentPage + 1)
                }
                className="
                    px-4
                    py-2
                    rounded-lg
                    border
                    disabled:opacity-40
                "
            >
                Next
            </button>
        </div>
    );
};

export default ResourcePagination;