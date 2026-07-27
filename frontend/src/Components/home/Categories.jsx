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

// import { useEffect, useState } from "react";

// import CategoryCard from "./CategoryCard";
// import Loader from "../ui/Loader";
// import { categoryAPI } from "../../api/category.api";

// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         setLoading(true);

//         const response = await categoryAPI.getCategories({
//           type: "resourceType",
//         });

//         setCategories(response.data.data.categories);
//       } catch (error) {
//         console.error("Failed to fetch categories.", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <section
//       className="
//         py-24
//         bg-background
//       "
//     >
//       <div
//         className="
//           max-w-7xl
//           mx-auto
//           px-6
//         "
//       >
//         <div className="text-center">
//           <p
//             className="
//               text-primary
//               uppercase
//               tracking-widest
//               font-semibold
//             "
//           >
//             Categories
//           </p>

//           <h2
//             className="
//               mt-4
//               text-4xl
//               font-heading
//               font-bold
//               text-secondary
//             "
//           >
//             Browse Resources by Category
//           </h2>

//           <p
//             className="
//               mt-5
//               max-w-2xl
//               mx-auto
//               text-lg
//               text-gray600
//             "
//           >
//             Discover notes, previous year questions, books, assignments,
//             presentations and lab manuals tailored for your academic journey.
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex justify-center mt-16">
//             <Loader />
//           </div>
//         ) : (
//           <div
//             className="
//               mt-16
//               grid
//               gap-8
//               grid-cols-2
//               lg:grid-cols-3
//             "
//           >
//             {categories.map((category) => (
//               <CategoryCard
//                 key={category._id}
//                 id={category._id}
//                 title={category.name}
//                 type={category.type}
//                 isActive={category.isActive}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Categories;

// import { useEffect, useState } from "react";

// import AddCategoryModal from "../../components/admin/AddCategoryModal";

// import { adminAPI } from "../../api/admin.api";

// import useAdminCategories from "../../hooks/useAdminCategories";

// import { successToast, errorToast } from "../../utils/toast";
// import CategoryCard from "./CategoryCard";
// import Loader from "../ui/Loader";

// import { categoryAPI } from "../../api/category.api";

// const Categories = () => {
//   const [showAddModal, setShowAddModal] = useState(false);
//   // const [loading, setLoading] = useState(true);
//   const { categories, loading, filters, setFilters, refreshCategories } =
//     useAdminCategories();

//   const handleCreateCategory = async (data) => {
//     try {
//       await adminAPI.createCategory(data);

//       successToast("Category created successfully.");

//       setShowAddModal(false);

//       refreshCategories();
//     } catch (error) {
//       errorToast(error.response?.data?.message || "Failed to create category.");
//     }
//   };
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await categoryAPI.getCategories({
//           type: "resourceType",
//         });

//         setCategories(response.data.data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <section className="py-24 bg-background">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center">
//           <p className="text-primary uppercase tracking-widest font-semibold">
//             Categories
//           </p>

//           <h2 className="mt-4 text-4xl font-heading font-bold text-secondary">
//             Browse Resources by Category
//           </h2>

//           <p className="mt-5 max-w-2xl mx-auto text-lg text-gray600">
//             Discover notes, previous year questions, books, assignments,
//             presentations and lab manuals tailored for your academic journey.
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex justify-center mt-20">
//             <Loader />
//           </div>
//         ) : (
//           <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8">
//             {categories.map((category) => (
//               <CategoryCard key={category._id} title={category.name} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Categories;
