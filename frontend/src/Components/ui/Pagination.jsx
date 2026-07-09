import Button from "./Button";

const Pagination = ({
    page,
    totalPages,
    onPageChange,
}) => {

    return (

        <div className="flex justify-center gap-4 mt-10">

            <Button
                variant="outline"
                disabled={page === 1}
                onClick={() =>
                    onPageChange(page - 1)
                }
            >
                Previous
            </Button>

            <span className="flex items-center font-medium">

                {page} / {totalPages}

            </span>

            <Button
                variant="outline"
                disabled={page === totalPages}
                onClick={() =>
                    onPageChange(page + 1)
                }
            >
                Next
            </Button>

        </div>
    );
};

export default Pagination;