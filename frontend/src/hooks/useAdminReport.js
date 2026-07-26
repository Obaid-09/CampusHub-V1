import { useState } from "react";
import { adminAPI } from "../api/admin.api";

const useAdminReport = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchReport = async (reportId) => {
    try {
      setLoading(true);

      const response = await adminAPI.getReportById(reportId);

      setReport(response.data.data);
    } catch (error) {
      console.error("Failed to fetch report", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    report,
    loading,
    fetchReport,
  };
};

export default useAdminReport;
