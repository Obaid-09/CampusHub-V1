import {
    CheckCircle,
    Download,
    Star,
    MessageSquare,
    Trophy,
} from "lucide-react";

const icons = {

    approval: CheckCircle,

    download: Download,

    rating: Star,

    review: MessageSquare,

    achievement: Trophy,

};

const NotificationCard = ({ notification }) => {

    const Icon = icons[notification.type];

    return (

        <div
            className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-6

                flex
                items-start
                gap-5

                hover:shadow-lg
                transition-all
            "
        >

            <div
                className="
                    h-12
                    w-12

                    rounded-full

                    bg-primary/10

                    flex
                    items-center
                    justify-center

                    text-primary
                "
            >

                <Icon size={22}/>

            </div>

            <div className="flex-1">

                <div className="flex justify-between">

                    <h2
                        className="
                            text-xl
                            font-semibold
                            text-secondary
                        "
                    >

                        {notification.title}

                    </h2>

                    {

                        notification.unread && (

                            <span
                                className="
                                    h-3
                                    w-3
                                    rounded-full
                                    bg-primary
                                "
                            />

                        )

                    }

                </div>

                <p
                    className="
                        mt-2
                        text-gray600
                    "
                >

                    {notification.description}

                </p>

                <p
                    className="
                        mt-4
                        text-sm
                        text-gray400
                    "
                >

                    {notification.time}

                </p>

            </div>

        </div>

    );

};

export default NotificationCard;