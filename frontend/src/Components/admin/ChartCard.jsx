const ChartCard = ({ title, children }) => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-6
            "
    >
      <h2
        className="
                    text-2xl
                    font-heading
                    font-semibold
                    text-secondary
                    mb-6
                "
      >
        {title}
      </h2>

      {children}
    </div>
  );
};

export default ChartCard;
