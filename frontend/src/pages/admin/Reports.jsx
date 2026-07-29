import { useState } from "react";

import AdminLayout from "../../Components/admin/AdminLayout";
import ReportsToolbar from "../../Components/admin/ReportsToolbar";
import ReportsTable from "../../Components/admin/ReportsTable";
import ReportDetailsModal from "../../Components/admin/ReportDetailsModal";
import ResolveReportModal from "../../Components/admin/ResolveReportModal";
import DismissReportModal from "../../Components/admin/DismissReportModal";

import useAdminReports from "../../hooks/useAdminReports";
import useAdminReport from "../../hooks/useAdminReport";

import { adminAPI } from "../../api/admin.api";
import { successToast, errorToast } from "../../utils/toast";

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const { reports, loading, filters, setFilters, refreshReports } =
    useAdminReports();

  const { report, loading: reportLoading, fetchReport } = useAdminReport();

  const [showDetails, setShowDetails] = useState(false);
  const [showResolve, setShowResolve] = useState(false);
  const [showDismiss, setShowDismiss] = useState(false);

  // ==========================
  // Resolve Report
  // ==========================

  const handleResolve = async (adminNotes) => {
    try {
      await adminAPI.resolveReport(selectedReport._id, adminNotes);

      successToast("Report resolved successfully.");

      setShowResolve(false);
      setShowDetails(false);
      setSelectedReport(null);

      refreshReports();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to resolve report.");
    }
  };

  // ==========================
  // Dismiss Report
  // ==========================

  const handleDismiss = async (adminNotes) => {
    try {
      await adminAPI.dismissReport(selectedReport._id, adminNotes);

      successToast("Report dismissed successfully.");

      setShowDismiss(false);
      setShowDetails(false);
      setSelectedReport(null);

      refreshReports();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to dismiss report.");
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-heading font-bold text-secondary">
            Reports
          </h1>

          <p className="mt-2 text-gray600">
            Review reports submitted by users.
          </p>
        </div>

        {/* Toolbar */}
        <ReportsToolbar filters={filters} setFilters={setFilters} />

        {/* Reports Table */}
        <ReportsTable
          reports={reports}
          loading={loading}
          onView={async (report) => {
            await fetchReport(report._id);
            setShowDetails(true);
          }}
          onResolve={(report) => {
            setSelectedReport(report);
            setShowResolve(true);
          }}
          onDismiss={(report) => {
            setSelectedReport(report);
            setShowDismiss(true);
          }}
        />

        {/* Details Modal */}
        <ReportDetailsModal
          open={showDetails}
          report={report}
          loading={reportLoading}
          onClose={() => setShowDetails(false)}
          onResolve={() => {
            setSelectedReport(report);
            setShowDetails(false);
            setShowResolve(true);
          }}
          onDismiss={() => {
            setSelectedReport(report);
            setShowDetails(false);
            setShowDismiss(true);
          }}
        />

        {/* Resolve Modal */}
        <ResolveReportModal
          open={showResolve}
          report={selectedReport}
          onClose={() => {
            setShowResolve(false);
            setSelectedReport(null);
          }}
          onResolve={handleResolve}
        />

        {/* Dismiss Modal */}
        <DismissReportModal
          open={showDismiss}
          report={selectedReport}
          onClose={() => {
            setShowDismiss(false);
            setSelectedReport(null);
          }}
          onDismiss={handleDismiss}
        />
      </div>
    </AdminLayout>
  );
};

export default Reports;
