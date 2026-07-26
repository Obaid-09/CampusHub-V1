// import Button from "../ui/Button";

// const statusStyles = {
//   pending: "bg-yellow-100 text-yellow-700",
//   resolved: "bg-green-100 text-green-700",
//   dismissed: "bg-red-100 text-red-700",
// };

// const statusLabels = {
//   pending: "Pending",
//   resolved: "Resolved",
//   dismissed: "Dismissed",
// };

// const ReportRow = ({ report, onView, onResolve, onDismiss }) => {
//   return (
//     <tr className="border-b last:border-none">
//       <td className="px-6 py-5">
//         <div>
//           <h3
//             className="
//                             font-semibold
//                             text-secondary
//                         "
//           >
//             {report.target}
//           </h3>

//           <p className="text-sm text-gray500">{report.type}</p>
//         </div>
//       </td>

//       <td>{report.reporter}</td>

//       <td>{report.reason}</td>

//       <td className="text-center">
//         <span
//           className={`
//       inline-flex
//       items-center
//       justify-center
//       px-3
//       py-1
//       rounded-full
//       text-xs
//       font-semibold
//       capitalize
//       ${statusStyles[report.status]}
//     `}
//         >
//           {statusLabels[report.status]}
//         </span>
//       </td>

//       <td>{report.reportedAt}</td>

//       {/* <td>
//         <div className="flex gap-2">
//           <Button size="sm" variant="outline" onClick={() => onView(report)}>
//             View
//           </Button>

//           <Button size="sm" onClick={() => onResolve(report)}>
//             Resolve
//           </Button>

//           <Button size="sm" variant="danger" onClick={() => onDismiss(report)}>
//             Dismiss
//           </Button>
//         </div>
//       </td> */}
//       <td>
//         <div className="flex items-center gap-2 justify-center">
//           <Button size="sm" variant="outline" onClick={() => onView(report)}>
//             View
//           </Button>

//           {report.status === "pending" ? (
//             <>
//               <Button size="sm" onClick={() => onResolve(report)}>
//                 Resolve
//               </Button>

//               <Button
//                 size="sm"
//                 variant="danger"
//                 onClick={() => onDismiss(report)}
//               >
//                 Dismiss
//               </Button>
//             </>
//           ) : (
//             <Button size="sm" disabled className="cursor-not-allowed">
//               {report.status === "resolved" ? "Resolved" : "Dismissed"}
//             </Button>
//           )}
//         </div>
//       </td>
//     </tr>
//   );
// };

// export default ReportRow;

import Button from "../ui/Button";

const statusStyles = {
  pending: "bg-yellow-100 text-yellow-700",
  resolved: "bg-green-100 text-green-700",
  dismissed: "bg-red-100 text-red-700",
};

const statusLabels = {
  pending: "Pending",
  resolved: "Resolved",
  dismissed: "Dismissed",
};

const ReportRow = ({ report, onView, onResolve, onDismiss }) => {
  return (
    <tr className="border-b last:border-none hover:bg-gray50 transition-colors">
      {/* Resource */}
      <td className="px-6 py-5">
        <div className="min-w-[240px]">
          <h3 className="font-semibold text-secondary">
            {report.resource?.title}
          </h3>

          <p className="mt-1 text-sm text-gray500">
            {report.resource?.subject} • {report.resource?.type}
          </p>
        </div>
      </td>

      {/* Reporter */}
      <td className="px-6 text-center">
        <div className="flex items-center justify-cenetr gap-3 min-w-[190px]">
          <img
            src={report.reportedBy?.avatar}
            alt={report.reportedBy?.fullname}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <p className="font-medium text-secondary">
              {report.reportedBy?.fullname}
            </p>

            <p className="text-sm text-gray500">
              @{report.reportedBy?.username}
            </p>
          </div>
        </div>
      </td>

      {/* Reason */}
      <td className="px-6">{report.reason}</td>

      {/* Status */}
      <td className="text-center">
        <span
          className={`
            inline-flex
            items-center
            justify-center
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            capitalize
            ${statusStyles[report.status]}
          `}
        >
          {statusLabels[report.status]}
        </span>
      </td>

      {/* Date */}
      <td className="px-6 whitespace-nowrap">
        {new Date(report.createdAt).toLocaleDateString()}
      </td>

      {/* Actions */}
      <td>
        <div className="flex items-center justify-center gap-2">
          <Button size="sm" variant="outline" className="px-3" onClick={() => onView(report)}>
            View
          </Button>

          {report.status === "pending" ? (
            <>
              <Button size="sm" onClick={() => onResolve(report)} className="px-3">
                Resolve
              </Button>

              <Button
                size="sm"
                variant="danger"
                onClick={() => onDismiss(report)}
                className="px-3"
              >
                Dismiss
              </Button>
            </>
          ) : (
            <Button size="sm" disabled className="px-3 cursor-not-allowed">
              {report.status === "resolved" ? "Resolved" : "Dismissed"}
            </Button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ReportRow;
