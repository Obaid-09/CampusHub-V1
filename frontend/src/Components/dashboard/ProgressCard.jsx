// const ProgressCard = () => {
//   return (
//     <div
//       className="
//                 bg-white
//                 rounded-2xl
//                 shadow-card
//                 border
//                 border-gray100
//                 p-6
//             "
//     >
//       <h2
//         className="
//                     text-2xl
//                     font-heading
//                     font-bold
//                     text-secondary
//                 "
//       >
//         Your Progress
//       </h2>

//       <p className="mt-6 text-gray600">Upload Goal</p>

//       <div
//         className="
//                     mt-3
//                     w-full
//                     h-3
//                     rounded-full
//                     bg-gray100
//                 "
//       >
//         <div
//           className="
//                         h-3
//                         rounded-full
//                         bg-primary
//                         w-3/5
//                     "
//         />
//       </div>

//       <p className="mt-3 text-primary font-medium">12 / 20 Uploads</p>
//     </div>
//   );
// };

// export default ProgressCard;

const ProgressCard = ({ progress, loading }) => {
  if (loading) {
    return (
      <div
        className="
                    bg-white
                    rounded-2xl
                    shadow-card
                    border
                    border-gray100
                    p-6
                "
      >
        Loading...
      </div>
    );
  }

  const goal = 20;

  const uploaded = progress?.uploaded ?? 0;

  const percentage = Math.min((uploaded / goal) * 100, 100);

  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-6
            "
    >
      <h2
        className="
                    text-2xl
                    font-heading
                    font-bold
                    text-secondary
                "
      >
        Your Progress
      </h2>

      <p className="mt-6 text-gray600">Upload Goal</p>

      <div
        className="
                    mt-3
                    w-full
                    h-3
                    rounded-full
                    bg-gray100
                "
      >
        <div
          className="h-3 rounded-full bg-primary"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-3 text-primary font-medium">
        {uploaded} / {goal} Uploads
      </p>
    </div>
  );
};

export default ProgressCard;
