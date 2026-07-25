import SearchBar from "../ui/SearchBar";
import Select from "../ui/Select";

const PendingToolbar = () => {
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
        <SearchBar placeholder="Search resources..." />
      </div>

      <Select
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

export default PendingToolbar;
