// import useAuth from "../../hooks/useAuth";

// const stats = [

//     {
//         label: "Uploads",
//         value: 0,
//     },

//     {
//         label: "Reputation",
//         value: 0,
//     },

//     {
//         label: "Branch",
//         value: "--",
//     },

//     {
//         label: "Semester",
//         value: "--",
//     },

// ];

// const ProfileStats = () => {

//     const { user } = useAuth();

//     return (

//         <div
//             className="
//                 grid
//                 grid-cols-2
//                 lg:grid-cols-4
//                 gap-6
//                 mt-8
//             "
//         >

//             {stats.map((item) => (

//                 <div
//                     key={item.key}
//                     className="
//                         bg-white
//                         rounded-2xl
//                         border
//                         border-gray100
//                         shadow-card
//                         p-6
//                         text-center
//                     "
//                 >

//                     <h2
//                         className="
//                             text-4xl
//                             font-bold
//                             text-primary
//                         "
//                     >
//                         {item.value}
//                     </h2>

//                     <p
//                         className="
//                             mt-2
//                             text-gray500
//                             font-medium
//                         "
//                     >
//                         {item.label}
//                     </p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProfileStats;

import useAuth from "../../hooks/useAuth";

const ProfileStats = () => {
  const { user } = useAuth();

  const profileStats = [
    {
      label: "Uploads",
      value: user?.uploadsCount ?? 0,
    },

    {
      label: "Downloads",
      value: user?.downloadsCount ?? 0,
    },

    {
      label: "Bookmarks",
      value: user?.bookmarksCount ?? 0,
    },

    {
      label: "Reputation",
      value: user?.reputation ?? 0,
    },
  ];

  return (
    <div
      className="
                grid
                grid-cols-2
                lg:grid-cols-4
                gap-6
                mt-8
            "
    >
      {profileStats.map((item) => (
        <div
          key={item.label}
          className="
                            bg-white
                            rounded-2xl
                            border
                            border-gray100
                            shadow-card
                            p-6
                            text-center
                        "
        >
          <h2
            className="
                                text-4xl
                                font-bold
                                text-primary
                            "
          >
            {item.value}
          </h2>

          <p
            className="
                                mt-2
                                text-gray500
                                font-medium
                            "
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProfileStats;
