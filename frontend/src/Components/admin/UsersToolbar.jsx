import SearchBar from "../ui/SearchBar";
import Select from "../ui/Select";

const roleOptions = [
  {
    value: "",
    label: "All Roles",
  },
  {
    value: "student",
    label: "Students",
  },
  {
    value: "admin",
    label: "Admins",
  },
];

const branchOptions = [
  {
    value: "",
    label: "All Branches",
  },
  {
    value: "CSE",
    label: "CSE",
  },
  {
    value: "ECE",
    label: "ECE",
  },
  {
    value: "EEE",
    label: "EEE",
  },
  {
    value: "ME",
    label: "ME",
  },
  {
    value: "CE",
    label: "CE",
  },
];

const sortOptions = [
  {
    value: "latest",
    label: "Latest",
  },
  {
    value: "oldest",
    label: "Oldest",
  },
  {
    value: "fullname",
    label: "Name",
  },
];

const UsersToolbar = ({ filters, setFilters }) => {
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
          placeholder="Search users..."
          value={filters.search}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              search: e.target.value,
            }))
          }
        />
      </div>

      <div className="w-full lg:w-48">
        <Select
          value={filters.role}
          options={roleOptions}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              role: e.target.value,
            }))
          }
        />
      </div>

      <div className="w-full lg:w-48">
        <Select
          value={filters.branch}
          options={branchOptions}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              branch: e.target.value,
            }))
          }
        />
      </div>

      <div className="w-full lg:w-48">
        <Select
          value={filters.sort}
          options={sortOptions}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              sort: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};

export default UsersToolbar;
