import { Link } from "react-router-dom";

import SearchBar from "../ui/SearchBar";
import Select from "../ui/Select";
import Button from "../ui/Button";

const sortOptions = [

    {
        value:"latest",
        label:"Latest",
    },

    {
        value:"downloads",
        label:"Most Downloaded",
    },

    {
        value:"views",
        label:"Most Viewed",
    },

];

const MyResourcesToolbar = ({
    search,
    setSearch,
    sort,
    setSort,
}) => {

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
                flex-col
                lg:flex-row

                gap-4
            "
        >

            <div className="flex-1">

                <SearchBar

                    value={search}

                    onChange={(e)=>
                        setSearch(e.target.value)
                    }

                    placeholder="Search your resources..."

                />

            </div>

            <div className="w-full lg:w-56">

                <Select

                    value={sort}

                    options={sortOptions}

                    onChange={(e)=>
                        setSort(e.target.value)
                    }

                />

            </div>

            <Link to="/upload">

                <Button>

                    + Upload Resource

                </Button>

            </Link>

        </div>

    );

};

export default MyResourcesToolbar;