import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title, type, count, color, iconColor, icon: Icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/resources?type=${encodeURIComponent(type)}`);
  };

  return (
    <div
      onClick={handleClick}
      className="
                group
                bg-white
                rounded-2xl
                p-6
                shadow-card
                border
                border-gray100
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
                cursor-pointer
            "
    >
      <div
        className={`
                    w-16
                    h-16
                    rounded-2xl
                    ${color}
                    flex
                    items-center
                    justify-center
                `}
      >
        <Icon size={30} className={iconColor} />
      </div>

      <h3 className="mt-6 text-2xl font-heading font-semibold text-secondary">
        {title}
      </h3>

      <p className="mt-2 text-gray500">{count} Resources</p>

      <div
        className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-primary
                    font-medium
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                "
      >
        Explore
        <ArrowRight size={18} />
      </div>
    </div>
  );
};

export default CategoryCard;

// import {
//   ArrowRight,
//   BookOpen,
//   FileText,
//   FileQuestion,
//   ClipboardList,
//   Presentation,
//   FlaskConical,
//   FolderOpen,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const categoryConfig = {
//   Notes: {
//     icon: BookOpen,
//     color: "bg-blue-100",
//     iconColor: "text-blue-600",
//   },

//   Books: {
//     icon: BookOpen,
//     color: "bg-green-100",
//     iconColor: "text-green-600",
//   },

//   PYQs: {
//     icon: FileQuestion,
//     color: "bg-yellow-100",
//     iconColor: "text-yellow-600",
//   },

//   Assignments: {
//     icon: ClipboardList,
//     color: "bg-purple-100",
//     iconColor: "text-purple-600",
//   },

//   Presentations: {
//     icon: Presentation,
//     color: "bg-red-100",
//     iconColor: "text-red-600",
//   },

//   "Lab Manual": {
//     icon: FlaskConical,
//     color: "bg-cyan-100",
//     iconColor: "text-cyan-600",
//   },

//   default: {
//     icon: FolderOpen,
//     color: "bg-gray-100",
//     iconColor: "text-gray-600",
//   },
// };

// const CategoryCard = ({ title }) => {
//   const navigate = useNavigate();

//   const config = categoryConfig[title] || categoryConfig.default;

//   const Icon = config.icon;

//   const handleClick = () => {
//     navigate(`/resources?type=${encodeURIComponent(title)}`);
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="
//         group
//         bg-white
//         rounded-2xl
//         p-6
//         border
//         border-gray100
//         shadow-card

//         hover:-translate-y-2
//         hover:shadow-xl

//         transition-all
//         duration-300

//         cursor-pointer
//       "
//     >
//       <div
//         className={`
//           w-16
//           h-16
//           rounded-2xl

//           flex
//           items-center
//           justify-center

//           ${config.color}
//         `}
//       >
//         <Icon size={30} className={config.iconColor} />
//       </div>

//       <h3
//         className="
//           mt-6
//           text-2xl
//           font-heading
//           font-semibold
//           text-secondary
//         "
//       >
//         {title}
//       </h3>

//       <p className="mt-2 text-gray500">Browse all {title.toLowerCase()}</p>

//       <div
//         className="
//           mt-6

//           flex
//           items-center
//           gap-2

//           text-primary
//           font-medium

//           opacity-0
//           group-hover:opacity-100

//           transition-all
//         "
//       >
//         Explore
//         <ArrowRight size={18} />
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;
