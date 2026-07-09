import SearchBar from "../ui/SearchBar";

const SearchBox = () => {
    return (
        <div className="hidden lg:block w-72">
            <SearchBar
                placeholder="Search resources..."
            />
        </div>
    );
};

export default SearchBox;