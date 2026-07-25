// import ActivityItem from "./ActivityItem";

// const ActivityTimeline = ({ activities, loading }) => {
//   if (loading) {
//     return (
//       <section className="mt-12">
//         <h2
//           className="
//                     text-3xl
//                     font-heading
//                     font-bold
//                     text-secondary
//                     mb-8
//                 "
//         >
//           Recent Activity
//         </h2>

//         <div
//           className="
//                     bg-white
//                     rounded-3xl
//                     border
//                     border-gray100
//                     shadow-card
//                     p-8
//                 "
//         >
//           Loading...
//         </div>
//       </section>
//     );
//   }
//   return (
//     <section className="mt-12">
//       <h2
//         className="
//                     text-3xl
//                     font-heading
//                     font-bold
//                     text-secondary
//                     mb-8
//                 "
//       >
//         Recent Activity
//       </h2>

//       <div
//         className="
//                     bg-white

//                     rounded-3xl

//                     border
//                     border-gray100

//                     shadow-card

//                     p-8
//                 "
//       >
//         <div className="space-y-8">
//           {activities?.map((activity) => (
//             <ActivityItem key={activity.id} activity={activity} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ActivityTimeline;

import ActivityItem from "./ActivityItem";

const ActivityTimeline = ({ activities, loading }) => {
  if (loading) {
    return (
      <section className="mt-12">
        <h2
          className="
                        text-3xl
                        font-heading
                        font-bold
                        text-secondary
                        mb-8
                    "
        >
          Recent Activity
        </h2>

        <div
          className="
                        bg-white
                        rounded-3xl
                        border
                        border-gray100
                        shadow-card
                        p-8
                    "
        >
          Loading...
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <h2
        className="
                    text-3xl
                    font-heading
                    font-bold
                    text-secondary
                    mb-8
                "
      >
        Recent Activity
      </h2>

      <div
        className="
                    bg-white
                    rounded-3xl
                    border
                    border-gray100
                    shadow-card
                    p-8
                "
      >
        <div className="space-y-8">
          {activities?.map((activity) => (
            <ActivityItem
              key={`${activity.type}-${activity.resourceId}-${activity.time}`}
              activity={activity}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityTimeline;
