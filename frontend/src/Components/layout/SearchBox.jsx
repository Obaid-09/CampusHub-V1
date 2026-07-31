import SearchBar from "../ui/SearchBar";

const SearchBox = () => {
  return (
    <div className="hidden lg:block w-60">
      <SearchBar placeholder="Search resources..." />
    </div>
  );
};

export default SearchBox;
