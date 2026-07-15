import {
    Inbox,
    FolderOpen,
    Bookmark,
    Bell,
    Search,
    FileText,
} from "lucide-react";

import EmptyStateAction from "./EmptyStateAction";

const icons = {

    resources: FolderOpen,

    bookmarks: Bookmark,

    notifications: Bell,

    search: Search,

    reports: FileText,

    default: Inbox,

};

const EmptyState = ({

    type = "default",

    title,

    description,

    actionText,

    onAction,

}) => {

    const Icon = icons[type] || Inbox;

    return (

        <div

            className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card

                p-16

                flex
                flex-col
                items-center
                text-center
            "

        >

            <div

                className="
                    w-20
                    h-20
                    rounded-full

                    bg-primary/10

                    flex
                    items-center
                    justify-center
                "

            >

                <Icon

                    size={38}

                    className="text-primary"

                />

            </div>

            <h2

                className="
                    mt-8

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

                    max-w-md

                    text-gray500

                    leading-relaxed
                "

            >

                {description}

            </p>

            <EmptyStateAction

                text={actionText}

                onClick={onAction}

            />

        </div>

    );

};

export default EmptyState;