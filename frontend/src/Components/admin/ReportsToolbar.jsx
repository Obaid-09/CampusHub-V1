import SearchBar from "../ui/SearchBar";
import Select from "../ui/Select";

const ReportsToolbar = () => {
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
        <SearchBar placeholder="Search reports..." />
      </div>

      <Select
        options={[
          {
            value: "",
            label: "All Status",
          },

          {
            value: "Pending",
            label: "Pending",
          },

          {
            value: "Resolved",
            label: "Resolved",
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
            value: "Resource",
            label: "Resource",
          },

          {
            value: "User",
            label: "User",
          },
        ]}
      />
    </div>
  );
};

export default ReportsToolbar;
