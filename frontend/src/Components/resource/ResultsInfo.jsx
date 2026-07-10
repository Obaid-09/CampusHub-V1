const ResultsInfo = ({
    showing,
    total,
}) => {
    return (
        <div className="flex items-center justify-between mb-6">
            <p className="text-gray600">
                Showing
                <span className="font-semibold text-secondary mx-1">
                    {showing}
                </span>
                of
                <span className="font-semibold text-primary mx-1">
                    {total}
                </span>
                Resources
            </p>
        </div>
    );
};

export default ResultsInfo;