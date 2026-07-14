import Button from "../ui/Button";

const UserDetailsModal = ({
    open,
    onClose,
    user,
}) => {

    if (!open || !user) return null;

    return (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

            <div className="bg-white rounded-3xl w-full max-w-2xl p-8">

                <div className="flex items-center gap-4 min-w-[240px]">

                    <img
                        src={user.avatar}
                        className="
                            w-14
                            h-14
                            rounded-full
                            object-cover
                            shrink-0
                        "
                    />

                    <div className="min-w-0">

                        <h3
                            className="
                                font-semibold
                                text-secondary
                                truncate
                            "
                        >
                            {user.name}
                        </h3>

                        <p
                            className="
                                text-sm
                                text-gray500
                                truncate
                            "
                        >
                            @{user.username}
                        </p>

                    </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-10">

                    <Info label="Email" value={user.email} />

                    <Info label="College" value={user.college} />

                    <Info label="Branch" value={user.branch} />

                    <Info label="Semester" value={user.semester} />

                    <Info label="Uploads" value={user.uploads} />

                    <Info label="Role" value={user.role} />

                </div>

                <div className="flex justify-end mt-10">

                    <Button
                        variant="outline"
                        onClick={onClose}
                    >
                        Close
                    </Button>

                </div>

            </div>

        </div>

    );

};

const Info = ({ label, value }) => (

    <div>

        <p className="text-gray500">
            {label}
        </p>

        <p className="mt-2 text-lg font-semibold text-secondary">
            {value}
        </p>

    </div>

);

export default UserDetailsModal;