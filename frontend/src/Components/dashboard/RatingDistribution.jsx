const ratings = [
  { star: 5, count: 70 },

  { star: 4, count: 20 },

  { star: 3, count: 7 },

  { star: 2, count: 2 },

  { star: 1, count: 1 },
];

const RatingDistribution = () => {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray100 p-6">
      <h2 className="text-xl font-heading font-bold text-secondary">
        Rating Distribution
      </h2>

      <div className="space-y-5 mt-8">
        {ratings.map((item) => (
          <div key={item.star} className="flex items-center gap-4">
            <span className="w-6">{item.star}★</span>

            <div className="flex-1 h-3 rounded-full bg-gray100">
              <div
                style={{
                  width: `${item.count}%`,
                }}
                className="
                                    h-full
                                    rounded-full
                                    bg-primary
                                "
              />
            </div>

            <span className="text-gray600">{item.count}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingDistribution;
