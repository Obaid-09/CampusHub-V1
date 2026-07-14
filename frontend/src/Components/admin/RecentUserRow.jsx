const RecentUserRow = ({ user }) => {

    return (

        <div

            className="
                flex
                justify-between
                items-center

                py-4

                border-b
                border-gray100

                last:border-none
            "

        >

            <div>

                <h4

                    className="
                        font-semibold
                        text-secondary
                    "

                >

                    {user.name}

                </h4>

                <p className="text-sm text-gray500">

                    {user.college}

                </p>

            </div>

            <span className="text-primary font-medium">

                New

            </span>

        </div>

    );

};

export default RecentUserRow;