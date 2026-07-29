const reviews = [
  {
    user: "Aman",
    rating: 5,
    comment: "Excellent notes. Very helpful.",
  },

  {
    user: "Rahul",
    rating: 4,
    comment: "Well structured and easy to understand.",
  },

  {
    user: "Sneha",
    rating: 5,
    comment: "Covered almost every topic.",
  },
];

const RecentReviews = () => {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray100 p-8">
      <h2 className="text-2xl font-heading font-bold text-secondary">
        Recent Reviews
      </h2>

      <div className="space-y-6 mt-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="
                            border-b
                            border-gray100
                            pb-6
                        "
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">{review.user}</h3>

              <span className="text-primary">{"★".repeat(review.rating)}</span>
            </div>

            <p className="mt-2 text-gray600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReviews;
