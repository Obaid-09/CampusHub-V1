// import Input from "../ui/Input";
// import Button from "../ui/Button";
// import { Plus } from "lucide-react";

// const CategoryToolbar = ({ search, setSearch, onAdd }) => {
//   return (
//     <div
//       className="
//                 flex
//                 flex-col
//                 md:flex-row
//                 gap-4
//                 justify-between
//                 items-center
//             "
//     >
//       <div className="w-full md:w-96">
//         <Input
//           placeholder="Search category..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <Button onClick={onAdd} className="gap-2">
//         <Plus size={18} />
//         Add Category
//       </Button>
//     </div>
//   );
// };

// export default CategoryToolbar;

import Input from "../ui/Input";
import Button from "../ui/Button";
import { Plus } from "lucide-react";

const CategoryToolbar = ({ search, setSearch, onAdd }) => {
  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
      "
    >
      <div className="w-full md:w-96">
        <Input
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Button onClick={onAdd} className="flex items-center gap-2">
        <Plus size={18} />
        Add Category
      </Button>
    </div>
  );
};

export default CategoryToolbar;
