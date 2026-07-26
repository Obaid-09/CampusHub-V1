import ReportRow from "./ReportRow";

const ReportsTable = ({ reports, onView, onResolve, onDismiss }) => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                overflow-x-auto
            "
    >
      <table className="w-full min-w-[1000px]">
        <thead>
          <tr className="border-b">
            <th className="px-6 py-5 text-left">Report</th>

            <th className="px-6 py-5 text-left">Reporter</th>

            <th className="px-6 py-5 text-left">Reason</th>

            <th className="px-6 py-5 text-left">Status</th>

            <th className="px-6 py-5 text-left">Date</th>

            <th className="px-6 py-5 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <ReportRow
              key={report._id}
              report={report}
              onView={onView}
              onResolve={onResolve}
              onDismiss={onDismiss}
            />
          ))}
        </tbody>
      </table>
    </div>

//     <div
//       className="
//     bg-white
//     rounded-2xl
//     shadow-card
//     border
//     border-gray100
//     overflow-hidden
//   "
//     >
//       <table className="w-full table-fixed">
//         <thead>
//           <tr className="border-b border-gray100">
//             <th className="w-[28%] px-6 py-4 text-left">Resource</th>

//             <th className="w-[22%] text-left">Reporter</th>

//             <th className="w-[14%] text-center">Reason</th>

//             <th className="w-[12%] text-center">Status</th>

//             <th className="w-[12%] text-center">Reported</th>

//             <th className="w-[22%] text-center">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {reports.map((report) => (
//             <ReportRow
//               key={report._id}
//               report={report}
//               onView={onView}
//               onResolve={onResolve}
//               onDismiss={onDismiss}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
  );
};

export default ReportsTable;
