import SearchBar from "../ui/SearchBar";
import Select from "../ui/Select";

const sortOptions = [

    {
        value:"latest",
        label:"Latest",
    },

    {
        value:"rating",
        label:"Highest Rated",
    },

    {
        value:"downloads",
        label:"Most Downloaded",
    },

];

const BookmarksToolbar = ({
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
                border
                border-gray100
                shadow-card
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
                    placeholder="Search bookmarks..."
                    onChange={(e)=>
                        setSearch(e.target.value)
                    }
                />

            </div>

            <div className="lg:w-56">

                <Select
                    value={sort}
                    options={sortOptions}
                    onChange={(e)=>
                        setSort(e.target.value)
                    }
                />

            </div>

        </div>

    );

};

export default BookmarksToolbar;