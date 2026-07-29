const ReportEvidenceCard = ({ report }) => {
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
        Report Description
      </h3>

      <p className="mt-4 text-gray600">{report.description}</p>

      <img
        src={report.evidence}
        alt="Evidence"
        className="
                    mt-6
                    rounded-xl
                    w-full
                "
      />
    </div>
  );
};

export default ReportEvidenceCard;
