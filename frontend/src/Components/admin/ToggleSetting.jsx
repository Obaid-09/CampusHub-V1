// import { useState } from "react";

// const ToggleSetting = ({ label, description }) => {
//   const [enabled, setEnabled] = useState(false);

//   return (
//     <div
//       className="
//                 flex
//                 justify-between
//                 items-center
//                 py-3
//             "
//     >
//       <div>
//         <h3
//           className="
//                         font-semibold
//                         text-secondary
//                     "
//         >
//           {label}
//         </h3>

//         <p className="text-gray500">{description}</p>
//       </div>

//       <button
//         onClick={() => setEnabled(!enabled)}
//         className={`
//                     relative
//                     w-14
//                     h-8
//                     rounded-full
//                     transition-all

//                     ${enabled ? "bg-primary" : "bg-gray300"}
//                 `}
//       >
//         <span
//           className={`
//                         absolute
//                         top-1
//                         left-1

//                         w-6
//                         h-6

//                         rounded-full
//                         bg-white

//                         transition-all

//                         ${enabled ? "translate-x-6" : ""}

//                     `}
//         />
//       </button>
//     </div>
//   );
// };

// export default ToggleSetting;

const ToggleSetting = ({ label, description, checked, onChange }) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-6
        py-5
        border-b
        border-gray100
        last:border-none
      "
    >
      <div className="flex-1">
        <h3
          className="
            text-lg
            font-semibold
            text-secondary
          "
        >
          {label}
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-gray500
            leading-relaxed
          "
        >
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`
          relative
          h-8
          w-14
          rounded-full
          transition-all
          duration-300
          focus:outline-none
          focus:ring-2
          focus:ring-primary/30

          ${checked ? "bg-primary" : "bg-gray300"}
        `}
      >
        <span
          className={`
            absolute
            top-1
            left-1
            h-6
            w-6
            rounded-full
            bg-white
            shadow-md
            transition-all
            duration-300

            ${checked ? "translate-x-6" : ""}
          `}
        />
      </button>
    </div>
  );
};

export default ToggleSetting;
