const ReportedEntityCard = ({ report }) => {
  return (
    <div
      className="
                bg-background
                rounded-2xl
                p-6
            "
    >
      <h3
        className="
                    text-xl
                    font-semibold
                    text-secondary
                "
      >
        Reported Resource
      </h3>

      <div className="mt-6 space-y-4">
        <Info label="Title" value={report.target} />

        <Info label="Branch" value={report.resource.branch} />

        <Info label="Semester" value={report.resource.semester} />

        <Info label="Subject" value={report.resource.subject} />

        <Info label="Course Code" value={report.resource.courseCode} />

        <Info label="Uploader" value={report.resource.uploader} />
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray500">{label}</p>

    <p className="font-semibold">{value}</p>
  </div>
);

export default ReportedEntityCard;
