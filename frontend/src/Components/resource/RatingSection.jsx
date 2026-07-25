import { Star } from "lucide-react";

const RatingSection = ({ reviews = [] }) => {

    return (

        <div
            className="
                mt-16
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-8
            "
        >
            <h2
                className="
                    text-3xl
                    font-heading
                    font-bold
                    text-secondary
                "
            >
                Ratings & Reviews
            </h2>

            <div className="space-y-8 mt-8">
                {reviews.length === 0 && <p className="text-gray500">No ratings or reviews yet.</p>}
                {reviews.map((review) => (

                    <div
                        key={review.id}
                        className="
                            border-b
                            border-gray100
                            pb-6
                        "
                    >
                        <div className="flex justify-between">
                            <div>
                                <h3 className="font-semibold text-secondary">

                                    {review.name}

                                </h3>
                                <p className="text-gray500 text-sm">

                                    {review.date}
                                </p>
                            </div>

                            <div className="flex items-center gap-1">
                                <Star
                                    size={18}
                                    className="text-yellow-500 fill-yellow-500"
                                />
                                <span>

                                    {review.rating}

                                </span>
                            </div>
                        </div>
                        <p className="mt-4 text-gray600">

                            {review.comment}

                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RatingSection;
