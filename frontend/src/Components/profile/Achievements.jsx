import AchievementBadge from "./AchievementBadge";
import { achievements } from "../../constants/profile";

const Achievements = () => {
  return (
    <section className="mt-10">
      <h2
        className="
                    text-3xl
                    font-heading
                    font-bold
                    text-secondary
                    mb-6
                "
      >
        Achievements
      </h2>

      <div
        className="
                    grid
                    md:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                "
      >
        {achievements.map((item) => (
          <AchievementBadge key={item.id} achievement={item} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
