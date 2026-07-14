import {

    Bell,

    Search,

} from "lucide-react";

const AdminTopbar = () => {

    return (

        <header

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

            <div

                className="
                    flex

                    items-center

                    gap-3
                "

            >

                <Search

                    className="text-gray400"

                    size={20}

                />

                <input

                    placeholder="Search..."

                    className="
                        outline-none
                        bg-transparent
                    "

                />

            </div>

            <div

                className="
                    flex

                    items-center

                    gap-5
                "

            >

                <Bell

                    size={22}

                    className="
                        text-gray500
                    "

                />

                <img

                    src="https://i.pravatar.cc/100?img=11"

                    alt=""

                    className="
                        w-11
                        h-11
                        rounded-full
                    "

                />

            </div>

        </header>

    );

};

export default AdminTopbar;