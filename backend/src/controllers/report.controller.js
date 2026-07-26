// import { asyncHandler } from "../utils/asyncHandler.js";
// import { ApiResponse } from "../utils/ApiResponse.js";
// import { User } from "../models/user.models.js";
// import { Resource } from "../models/resource.models.js";
// import mongoose from "mongoose";
// import { ApiError } from "../utils/ApiError.js";
// import { formatFileSize } from "../utils/formatFileSize.js";

// const reportResource = asyncHandler(async (req, res) => {
//   const { resourceId } = req.params;
//   const { reason, description } = req.body;

//   // Validate Resource ID
//   if (!mongoose.Types.ObjectId.isValid(resourceId)) {
//     throw new ApiError(400, "Invalid resource ID.");
//   }

//   // Check Resource
//   const resource = await Resource.findOne({
//     _id: resourceId,
//     isDeleted: false,
//     status: "approved",
//   });

//   if (!resource) {
//     throw new ApiError(404, "Resource not found.");
//   }

//   // Prevent reporting own resource
//   if (resource.uploadedBy.toString() === req.user._id.toString()) {
//     throw new ApiError(400, "You cannot report your own resource.");
//   }

//   // Prevent duplicate report
//   const existingReport = await Report.findOne({
//     resource: resourceId,
//     reportedBy: req.user._id,
//     status: "pending",
//   });

//   if (existingReport) {
//     throw new ApiError(400, "You have already reported this resource.");
//   }

//   // Create Report
//   const report = await Report.create({
//     resource: resourceId,
//     reportedBy: req.user._id,
//     reason,
//     description,
//   });

//   return res
//     .status(201)
//     .json(new ApiResponse(201, report, "Report submitted successfully."));
// });

// export { reportResource };
