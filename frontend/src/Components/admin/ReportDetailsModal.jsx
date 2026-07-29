import Button from "../ui/Button";
import Loader from "../ui/Loader";

const statusStyles = {
  pending: "bg-yellow-100 text-yellow-700",
  resolved: "bg-green-100 text-green-700",
  dismissed: "bg-red-100 text-red-700",
};

const ReportDetailsModal = ({
  open,
  report,
  loading,
  onClose,
  onResolve,
  onDismiss,
}) => {
  if (!open) return null;

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-10">
          <Loader/>
        </div>
      </div>
    );
  }

  if (!report) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-6">
          <div>
            <h2 className="text-3xl font-heading font-bold text-secondary">
              Report Details
            </h2>

            <p className="mt-1 text-gray500">
              Review the reported resource and take the appropriate action.
            </p>
          </div>

          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Report */}
          <div className="rounded-2xl border border-gray100 p-6">
            <h3 className="text-xl font-semibold text-secondary mb-5">
              Report Information
            </h3>

            <div className="space-y-4">
              <InfoRow label="Reason" value={report.reason} />

              <InfoRow
                label="Status"
                value={
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusStyles[report.status]}`}
                  >
                    {report.status}
                  </span>
                }
              />

              <InfoRow
                label="Reported On"
                value={new Date(report.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              />

              <div>
                <p className="text-sm font-medium text-gray500 mb-2">
                  Description
                </p>

                <div className="rounded-xl bg-gray50 border border-gray100 p-4 text-secondary">
                  {report.description || "No additional description provided."}
                </div>
              </div>
            </div>
          </div>

          {/* Resource */}
          <div className="rounded-2xl border border-gray100 p-6">
            <h3 className="text-xl font-semibold text-secondary mb-5">
              Reported Resource
            </h3>

            <div className="space-y-4">
              <InfoRow label="Title" value={report.resource?.title} />

              <InfoRow label="Subject" value={report.resource?.subject} />

              <InfoRow label="Type" value={report.resource?.type} />

              <InfoRow
                label="Uploader"
                value={report.resource?.uploadedBy?.fullname}
              />
            </div>
          </div>

          {/* Reporter */}
          <div className="rounded-2xl border border-gray100 p-6">
            <h3 className="text-xl font-semibold text-secondary mb-5">
              Reported By
            </h3>

            <div className="flex items-center gap-4">
              <img
                src={report.reportedBy?.avatar}
                alt={report.reportedBy?.fullname}
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-secondary">
                  {report.reportedBy?.fullname}
                </h4>

                <p className="text-gray500">@{report.reportedBy?.username}</p>

                <p className="text-sm text-gray500 mt-1">
                  {report.reportedBy?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Review */}
          <div className="rounded-2xl border border-gray100 p-6">
            <h3 className="text-xl font-semibold text-secondary mb-5">
              Review
            </h3>

            <div className="space-y-4">
              <InfoRow
                label="Reviewed By"
                value={report.reviewedBy?.fullname || "Not reviewed"}
              />

              <InfoRow
                label="Reviewed At"
                value={
                  report.reviewedAt
                    ? new Date(report.reviewedAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "-"
                }
              />

              <div>
                <p className="text-sm font-medium text-gray500 mb-2">
                  Admin Notes
                </p>

                <div className="rounded-xl bg-gray50 border border-gray100 p-4 text-secondary min-h-[90px]">
                  {report.adminNotes || "No notes available."}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        {report.status === "pending" && (
          <div className="mt-10 flex justify-end gap-4 border-t pt-6">
            <Button variant="danger" onClick={onDismiss}>
              Dismiss
            </Button>

            <Button onClick={onResolve}>Resolve</Button>
          </div>
        )}
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between gap-4 border-b border-gray100 pb-3">
    <p className="text-gray500 font-medium">{label}</p>

    <div className="text-right font-medium text-secondary">{value}</div>
  </div>
);

export default ReportDetailsModal;
