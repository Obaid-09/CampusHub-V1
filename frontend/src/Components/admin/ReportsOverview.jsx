import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import ChartCard from "./ChartCard";

const ReportCard = ({ title, value, icon: Icon, color, bg }) => (
  <div
    className="
      bg-gray50
      border
      border-gray100
      rounded-2xl
      py-6
      px-5

      flex
      flex-col
      items-center
      justify-center

      hover:shadow-md
      transition-all
      duration-300
    "
  >
    <div
      className="
        w-14
        h-14
        rounded-full
        flex
        items-center
        justify-center
      "
      style={{ backgroundColor: bg }}
    >
      <Icon size={28} style={{ color }} />
    </div>

    <h2
      className="
        mt-4
        text-4xl
        font-bold
        text-secondary
      "
    >
      {value}
    </h2>

    <p
      className="
        mt-2
        text-sm
        font-medium
        text-gray500
      "
    >
      {title}
    </p>
  </div>
);

const ReportsOverview = ({ reports }) => {
  return (
    <ChartCard title="Reports Overview">
      <div className="grid md:grid-cols-3 gap-8">
        <ReportCard
          title="Pending Reports"
          value={reports?.pending ?? 0}
          icon={AlertTriangle}
          color="#F59E0B"
          bg="#FEF3C7"
        />

        <ReportCard
          title="Resolved Reports"
          value={reports?.resolved ?? 0}
          icon={CheckCircle2}
          color="#16A34A"
          bg="#DCFCE7"
        />

        <ReportCard
          title="Dismissed Reports"
          value={reports?.dismissed ?? 0}
          icon={XCircle}
          color="#EF4444"
          bg="#FEE2E2"
        />
      </div>
    </ChartCard>
  );
};

export default ReportsOverview;
