import { resourceReports } from "../../../constants/admin";

import ReportCard from "./ReportCard";

const ReportsSection = () => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-8
            "
    >
      <h2
        className="
                    text-2xl
                    font-bold
                    text-secondary
                    mb-6
                "
      >
        Reports
      </h2>

      <div className="space-y-5">
        {resourceReports.map((report) => (
          <ReportCard key={report._id} report={report} />
        ))}
      </div>
    </div>
  );
};

export default ReportsSection;
