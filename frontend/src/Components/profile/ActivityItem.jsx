import {
    Upload,
    Trophy,
    Pencil,
} from "lucide-react";

const icons = {
    upload: Upload,
    achievement: Trophy,
    update: Pencil,
};

const ActivityItem = ({ activity }) => {

    const Icon = icons[activity.type];

    return (

        <div className="flex gap-5">

            <div
                className="
                    w-12
                    h-12

                    rounded-full

                    bg-primary/10

                    flex
                    items-center
                    justify-center

                    text-primary

                    flex-shrink-0
                "
            >

                <Icon size={22}/>

            </div>

            <div className="flex-1">

                <h3
                    className="
                        font-semibold
                        text-secondary
                    "
                >

                    {activity.title}

                </h3>

                <p
                    className="
                        mt-1
                        text-sm
                        text-gray500
                    "
                >

                    {activity.time}

                </p>

            </div>

        </div>

    );

};

export default ActivityItem;