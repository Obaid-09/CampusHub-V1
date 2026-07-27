// const CategoryTabs = ({ tabs, active, setActive }) => {
//   return (
//     <div
//       className="
//                 flex
//                 flex-wrap
//                 gap-3
//             "
//     >
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => setActive(tab)}
//           className={`

//                             px-5

//                             py-3

//                             rounded-xl

//                             font-medium

//                             transition-all

//                             ${
//                               active === tab
//                                 ? "bg-primary text-white"
//                                 : "bg-white border border-gray100 text-secondary"
//                             }

//                         `}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default CategoryTabs;

const CategoryTabs = ({ tabs, active, setActive }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActive(tab.value)}
          className={`
            py-3
            rounded-xl
            font-medium
            transition-all

            ${
              active === tab.value
                ? "bg-primary text-white shadow-md"
                : "bg-white border border-gray200 text-secondary hover:bg-gray50"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
