// import Button from "../ui/Button";

// const CategoryRow = ({ item, onEdit, onDelete }) => {
//   return (
//     <tr className="border-b last:border-none">
//       <td className="px-6 py-5">{item}</td>

//       <td>Admin</td>

//       <td>Today</td>

//       <td>
//         <div className="flex gap-3">
//           <Button size="sm" variant="outline" onClick={() => onEdit(item)}>
//             Edit
//           </Button>

//           <Button size="sm" variant="danger" onClick={() => onDelete(item)}>
//             Delete
//           </Button>
//         </div>
//       </td>
//     </tr>
//   );
// };

// export default CategoryRow;

import Button from "../ui/Button";

const CategoryRow = ({ category, onEdit, onDelete }) => {
  return (
    <tr className="border-b gap-5 last:border-none hover:bg-gray50 transition-colors overflow-x-auto">
      <td className="px-6 py-5 text-center font-medium text-secondary">{category.name}</td>

      <td className="px-4 text-center">
        <span
          className={`
            inline-flex
            items-center
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold

            ${
              category.isActive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }
          `}
        >
          {category.isActive ? "Active" : "Inactive"}
        </span>
      </td>

      <td className="px-4 text-center">{category.createdBy?.fullname || "-"}</td>

      <td className="px-4 text-center">{new Date(category.createdAt).toLocaleDateString()}</td>

      <td className="px-4">
        <div className="flex justify-center gap-3">
          <Button size="sm" variant="outline" onClick={() => onEdit(category)}>
            Edit
          </Button>

          <Button size="sm" variant="danger" onClick={() => onDelete(category)}>
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default CategoryRow;
