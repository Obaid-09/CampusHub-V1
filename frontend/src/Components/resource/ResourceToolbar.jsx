import SearchBar from "../ui/SearchBar";
import Select from "../ui/Select";

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "downloads", label: "Most Downloaded" },
  { value: "views", label: "Most Viewed" },
  { value: "rating", label: "Highest Rated" },
];

const ResourceToolbar = ({ selectedFilters, setSelectedFilters }) => {
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
                md:flex-row
                gap-4
            "
    >
      {/* Search */}

      <div className="flex-1">
        <SearchBar
          value={selectedFilters.search}
          onChange={(e) =>
            setSelectedFilters((prev) => ({
              ...prev,
              search: e.target.value,
            }))
          }
        />
      </div>

      {/* Sort */}

      <div className="w-full md:w-60">
        <Select
          value={selectedFilters.sort}
          options={sortOptions}
          onChange={(e) =>
            setSelectedFilters((prev) => ({
              ...prev,
              sort: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};

export default ResourceToolbar;
