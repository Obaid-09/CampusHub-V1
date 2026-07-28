import CategoryCard from "./CategoryCard";
import { categories } from "../../constants/categories";

const Categories = () => {
  return (
    <section
      className="
                py-24
                bg-background
            "
    >
      <div
        className="
                    max-w-7xl
                    mx-auto
                    px-6
                "
      >
        <div className="text-center">
          <p
            className="
                            text-primary
                            uppercase
                            tracking-widest
                            font-semibold
                        "
          >
            Categories
          </p>

          <h2
            className="
                            mt-4
                            text-4xl
                            font-heading
                            font-bold
                            text-secondary
                        "
          >
            Browse Resources by Category
          </h2>

          <p
            className="
                            mt-5
                            max-w-2xl
                            mx-auto
                            text-lg
                            text-gray600
                        "
          >
            Discover notes, previous year questions, books, assignments,
            presentations and lab manuals tailored for your academic journey.
          </p>
        </div>

        <div
          className="
                        mt-16
                        grid
                        gap-8
                        grid-cols-2
                        lg:grid-cols-3
                    "
        >
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
