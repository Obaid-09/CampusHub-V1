import { Search } from "lucide-react";

const SearchBar = ({
    placeholder = "Search...",
    ...props
}) => {

    return (
        <div className="relative w-full">
            <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray500"
            />
            <input
                className="
                    w-full
                    pl-12
                    pr-4
                    py-3
                    rounded-xl
                    border
                    border-gray200
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primaryLight
                    outline-none
                "
                placeholder={placeholder}
                {...props}
            />

        </div>

    );
};

export default SearchBar;