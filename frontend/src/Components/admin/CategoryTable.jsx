// import CategoryRow from "./CategoryRow";

// const CategoryTable = ({ data, onEdit, onDelete }) => {
//   return (
//     <div
//       className="
//                 bg-white
//                 rounded-2xl
//                 shadow-card
//                 overflow-hidden
//             "
//     >
//       <table className="w-full">
//         <thead>
//           <tr className="border-b">
//             <th className="px-6 py-5 text-left">Name</th>

//             <th className="text-left">Created By</th>

//             <th className="text-left">Created At</th>

//             <th className="text-left">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((item) => (
//             <CategoryRow
//               key={item}
//               item={item}
//               onEdit={onEdit}
//               onDelete={onDelete}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CategoryTable;

import Loader from "../ui/Loader";
import EmptyState from "../ui/EmptyState";

import CategoryRow from "./CategoryRow";

const CategoryTable = ({ categories, loading, onEdit, onDelete }) => {
  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <Loader />
      </div>
    );
  }

  if (!categories.length) {
    return (
      <EmptyState
        title="No Categories Found"
        description="Try changing the search or add a new category."
      />
    );
  }

  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray100
        shadow-card
        overflow-hidden
      "
    >
      <div className="overflow-x-auto">
    <table className="min-w-[900px] w-full">
        <thead className="bg-gray50">
          <tr>
            <th className="px-6 py-5 text-center">Name</th>

            <th className="text-center">Status</th>

            <th className="text-center">Created By</th>

            <th className="text-center">Created At</th>

            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody className="overflow-auto">
          {categories.map((category) => (
            <CategoryRow
              key={category._id}
              category={category}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CategoryTable;
