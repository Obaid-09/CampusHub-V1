import SearchBar from "../resource/SearchBar";
import Select from "../ui/Select";

const AdminResourcesToolbar = ({
  search,
  setSearch,

  branch,
  setBranch,

  type,
  setType,
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
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search resources..."
        />
      </div>

      <Select
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        options={[
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
        ]}
      />

      <Select
        value={type}
        onChange={(e) => setType(e.target.value)}
        options={[
          {
            value: "",
            label: "All Types",
          },

          {
            value: "Notes",
            label: "Notes",
          },

          {
            value: "PYQ",
            label: "PYQ",
          },

          {
            value: "Assignment",
            label: "Assignment",
          },
        ]}
      />
    </div>
  );
};

export default AdminResourcesToolbar;
