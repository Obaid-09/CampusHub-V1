import Select from "../ui/Select";

const AnalyticsHeader = () => {
  return (
    <div
      className="
                flex
                flex-col
                lg:flex-row
                justify-between
                items-start
                lg:items-center
                gap-6
            "
    >
      <div>
        <h1
          className="
                        text-4xl
                        font-heading
                        font-bold
                        text-secondary
                    "
        >
          Analytics
        </h1>

        <p className="mt-2 text-gray600">
          Monitor platform growth and engagement.
        </p>
      </div>

      <div className="w-56">
        <Select
          options={[
            {
              value: "7",
              label: "Last 7 Days",
            },

            {
              value: "30",
              label: "Last 30 Days",
            },

            {
              value: "90",
              label: "Last 90 Days",
            },

            {
              value: "365",
              label: "Last Year",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AnalyticsHeader;
