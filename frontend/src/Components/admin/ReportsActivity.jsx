import { userReports } from "../../constants/admin";

const ReportsActivity = () => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-6
            "
    >
      <h2
        className="
                    text-xl
                    font-bold
                    text-secondary
                    mb-5
                "
      >
        Reports
      </h2>

      <div className="space-y-4">
        {userReports.map((report) => (
          <div
            key={report.id}
            className="
                                flex
                                justify-between
                            "
          >
            <span>{report.reason}</span>

            <span>{report.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsActivity;
