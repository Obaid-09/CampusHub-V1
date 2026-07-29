const AnalyticsCharts = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <DownloadTrend />

      <DownloadTrend title="Views Trend" />
    </div>
  );
};

export default AnalyticsCharts;

import DownloadTrend from "./DownloadTrend";
