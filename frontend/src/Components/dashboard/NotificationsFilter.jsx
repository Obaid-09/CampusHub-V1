import Button from "../ui/Button";

const NotificationsFilter = () => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100

                p-5

                flex
                justify-between
                items-center
            "
        >

            <h2
                className="
                    text-xl
                    font-semibold
                    text-secondary
                "
            >

                Recent Notifications

            </h2>

            <Button>

                Mark All as Read

            </Button>

        </div>

    );

};

export default NotificationsFilter;