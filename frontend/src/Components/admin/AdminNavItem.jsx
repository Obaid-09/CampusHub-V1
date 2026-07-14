import { NavLink } from "react-router-dom";

const AdminNavItem = ({
    icon: Icon,
    label,
    to,
}) => {

    return (

        <NavLink

            to={to}

            className={({isActive})=>`

                flex
                items-center
                gap-4

                px-5
                py-3

                rounded-xl

                transition-all

                ${
                    isActive

                    ?

                    "bg-primary text-white shadow-button"

                    :

                    "text-gray600 hover:bg-primary/10 hover:text-primary"

                }

            `}

        >

            <Icon size={20}/>

            <span className="font-medium">

                {label}

            </span>

        </NavLink>

    );

};

export default AdminNavItem;