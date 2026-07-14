import {
    Users,
    Files,
    Clock3,
    Flag,
} from "lucide-react";

const icons = {

    users: Users,

    files: Files,

    clock: Clock3,

    flag: Flag,

};

const AdminStatCard = ({ stat }) => {

    const Icon = icons[stat.icon];

    return (

        <div
            className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-6
            "
        >

            <Icon
                size={28}
                className={stat.color}
            />

            <p
                className="
                    mt-5
                    text-gray500
                "
            >

                {stat.title}

            </p>

            <h2
                className="
                    mt-2
                    text-4xl
                    font-bold
                    text-secondary
                "
            >

                {stat.value}

            </h2>

        </div>

    );

};

export default AdminStatCard;