import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import { Resource } from "../models/resource.models.js";
import mongoose from "mongoose";
import { Settings } from "../models/settings.models.js";
import { Category } from "../models/category.model.js";
import { Report } from "../models/report.models.js";
import { ApiError } from "../utils/ApiError.js";
import { formatFileSize } from "../utils/formatFileSize.js";
const adminDashboard = asyncHandler(async (req, res) => {
  // User Statistics
  // ==========================
  const [
    totalUsers,
    totalStudents,
    totalAdmins,
    totalResources,
    pendingResources,
    approvedResources,
    rejectedResources,
    deletedResources,
    recentResources,
    recentUsers,
    stats,
  ] = await Promise.all([
    User.countDocuments(),

    User.countDocuments({
      role: "student",
    }),

    User.countDocuments({
      role: "admin",
    }),

    Resource.countDocuments({
      isDeleted: false,
    }),

    Resource.countDocuments({
      status: "pending",
      isDeleted: false,
    }),

    Resource.countDocuments({
      status: "approved",
      isDeleted: false,
    }),

    Resource.countDocuments({
      status: "rejected",
      isDeleted: false,
    }),

    Resource.countDocuments({
      isDeleted: true,
    }),

    Resource.find({
      isDeleted: false,
    })
      .populate("uploadedBy", "fullname username avatar")
      .sort({ createdAt: -1 })
      .limit(5)
      .lean(),

    User.find()
      .select("fullname username avatar role createdAt")
      .sort({ createdAt: -1 })
      .limit(5)
      .lean(),

    Resource.aggregate([
      {
        $group: {
          _id: null,

          totalDownloads: {
            $sum: "$downloads",
          },

          totalViews: {
            $sum: "$views",
          },

          totalBookmarks: {
            $sum: "$bookmarks",
          },
        },
      },
    ]),
  ]);

  const platformStats = stats[0] || {
    totalDownloads: 0,
    totalViews: 0,
    totalBookmarks: 0,
  };

  // Response
  // ==========================
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        users: {
          totalUsers,
          totalStudents,
          totalAdmins,
        },

        resources: {
          totalResources,
          pendingResources,
          approvedResources,
          rejectedResources,
          deletedResources,
        },

        platform: {
          totalDownloads: platformStats.totalDownloads,
          totalViews: platformStats.totalViews,
          totalBookmarks: platformStats.totalBookmarks,
        },
        recentResources,
        recentUsers,
      },
      "Dashboard statistics fetched successfully"
    )
  );
});

const getAllUsers = asyncHandler(async (req, res) => {
  // Query Parameters
  // ==========================================
  const {
    page = 1,
    limit = 10,
    search,
    role,
    branch,
    year,
    semester,
    sort = "latest",
  } = req.query;

  // Pagination
  // ==========================================
  const pageNumber = Math.max(Number(page), 1);
  const limitNumber = Math.max(Number(limit), 1);
  const skip = (pageNumber - 1) * limitNumber;

  // Filters
  // ==========================================
  const filter = {};
  filter._id = {
    $ne: req.user._id,
  };
  if (role) {
    filter.role = role;
  }
  if (branch) {
    filter.branch = branch.toUpperCase();
  }
  if (year) {
    filter.year = Number(year);
  }
  if (semester) {
    filter.semester = Number(semester);
  }

  // Search
  // ==========================================
  if (search) {
    filter.$or = [
      {
        fullname: {
          $regex: search,
          $options: "i",
        },
      },
      {
        username: {
          $regex: search,
          $options: "i",
        },
      },
      {
        email: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  // Sorting
  // ==========================================
  let sortOption = {};
  switch (sort) {
    case "oldest":
      sortOption = {
        createdAt: 1,
      };
      break;

    case "fullname":
      sortOption = {
        fullname: 1,
      };
      break;

    case "latest":
    default:
      sortOption = {
        createdAt: -1,
      };
  }

  // Fetch Users
  // ==========================================
  const users = await User.find(filter)
    .select(
      "fullname username email avatar role branch year semester college lastLogin createdAt"
    )
    .select("-password -refreshToken -__v")
    .sort(sortOption)
    .skip(skip)
    .limit(limitNumber)
    .lean();

  // Total Count
  // ==========================================
  const totalUsers = await User.countDocuments(filter);
  const totalPages = Math.ceil(totalUsers / limitNumber);

  // Response
  // ==========================================
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        page: pageNumber,
        limit: limitNumber,
        totalUsers,
        totalPages,
        hasNextPage: pageNumber < totalPages,
        hasPreviousPage: pageNumber > 1,
        users,
      },
      "Users fetched successfully"
    )
  );
});

const getUserById = asyncHandler(async (req, res) => {
  // Validate User ID
  // ============================
  const { userId } = req.params;
  const { ObjectId } = mongoose.Types;
  if (!ObjectId.isValid(userId)) {
    throw new ApiError(400, "Invalid User ID");
  }

  // Find User
  // ============================
  const user = await User.findById(userId)
    .select("-password -refreshToken -__v")
    .lean();
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Upload Statistics
  // ============================
  const uploadsCount = await Resource.countDocuments({
    uploadedBy: user._id,
    isDeleted: false,
  });
  const deletedUploads = await Resource.countDocuments({
    uploadedBy: user._id,
    isDeleted: true,
  });

  const uploadedResources = await Resource.find({
    uploadedBy: user._id,
    isDeleted: false,
  })
    .select("title subject type downloads status createdAt")
    .sort({ createdAt: -1 })
    .lean();

  const userWithDownloads = await User.findById(userId)
    .populate({
      path: "downloads.resource",
      select: "title subject thumbnail",
    })
    .populate({
      path: "bookmarks.resource",
      select: "title subject thumbnail",
    });
  // Response
  // ============================
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        ...user,
        uploadsCount,
        deletedUploads,
        bookmarksCount: user.bookmarks?.length || 0,
        recentlyViewedCount: user.recentlyViewed?.length || 0,
        downloadsCount: user.downloads?.length || 0,
        uploadedResources,
      },
      "User fetched successfully"
    )
  );
});

const promoteUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  const validRoles = ["student", "moderator", "admin"];

  if (!validRoles.includes(role)) {
    throw new ApiError(400, "Invalid role.");
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found.");
  }

  if (user._id.toString() === req.user._id.toString()) {
    throw new ApiError(400, "You cannot change your own role.");
  }

  user.role = role;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User role updated successfully."));
});

const deleteUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new ApiError(400, "Invalid user id");
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (user._id.toString() === req.user._id.toString()) {
    throw new ApiError(400, "You cannot delete your own account.");
  }
  if (user.role === "admin") {
    throw new ApiError(403, "Admin cannot be deleted");
  }

  await User.findByIdAndDelete(userId);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User deleted successfully"));
});

const getPendingResources = asyncHandler(async (req, res) => {
  // Query Parameters
  // ==========================================
  const {
    page = 1,
    limit = 10,
    search,
    branch,
    semester,
    type,
    subject,
    college,
    sort = "latest",
  } = req.query;

  // Pagination
  // ==========================================
  const pageNumber = Math.max(Number(page), 1);
  const limitNumber = Math.max(Number(limit), 1);
  const skip = (pageNumber - 1) * limitNumber;

  // Filters
  // ==========================================
  const filter = {
    status: "pending",
    isDeleted: false,
  };
  if (branch) {
    filter.branch = branch.toUpperCase();
  }
  if (semester) {
    filter.semester = Number(semester);
  }
  if (type) {
    filter.type = type;
  }
  if (subject) {
    filter.subject = {
      $regex: subject,
      $options: "i",
    };
  }
  if (college) {
    filter.college = {
      $regex: college,
      $options: "i",
    };
  }

  // Search
  // ==========================================
  if (search) {
    filter.$or = [
      {
        title: {
          $regex: search,
          $options: "i",
        },
      },
      {
        subject: {
          $regex: search,
          $options: "i",
        },
      },
      {
        courseCode: {
          $regex: search.toUpperCase(),
          $options: "i",
        },
      },
    ];
  }

  // Sorting
  // ==========================================
  let sortOption = {};

  switch (sort) {
    case "oldest":
      sortOption = {
        createdAt: 1,
      };
      break;
    case "downloads":
      sortOption = {
        downloads: -1,
      };
      break;
    case "views":
      sortOption = {
        views: -1,
      };
      break;
    default:
      sortOption = {
        createdAt: -1,
      };
  }

  // Fetch Pending Resources
  // ==========================================
  const resources = await Resource.find(filter)
    .populate(
      "uploadedBy",
      "fullname username avatar branch year semester college"
    )
    .select("-pdfPublicId -thumbnailPublicId -__v")
    .sort(sortOption)
    .skip(skip)
    .limit(limitNumber)
    .lean();

  // Total Count
  // ==========================================
  const totalResources = await Resource.countDocuments(filter);
  const totalPages = Math.ceil(totalResources / limitNumber);

  // Response
  // ==========================================
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        page: pageNumber,
        limit: limitNumber,
        totalResources,
        totalPages,
        hasNextPage: pageNumber < totalPages,
        hasPreviousPage: pageNumber > 1,
        resources,
      },
      "Pending resources fetched successfully"
    )
  );
});

const approveResource = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;
  const { ObjectId } = mongoose.Types;

  // Validate Resource ID
  if (!ObjectId.isValid(resourceId)) {
    throw new ApiError(400, "Invalid Resource ID");
  }

  // Find Resource
  const resource = await Resource.findById(resourceId);
  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  // Prevent approving deleted resource
  if (resource.isDeleted) {
    throw new ApiError(400, "Deleted resources cannot be approved");
  }

  // Already approved
  if (resource.status === "approved") {
    throw new ApiError(400, "Resource is already approved");
  }

  // Update Status
  resource.status = "approved";
  resource.isVerified = true;
  resource.approvedBy = req.user._id;
  resource.approvedAt = new Date();
  await resource.save({
    validateBeforeSave: false,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, resource, "Resource approved successfully"));
});

const rejectResource = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;
  const { ObjectId } = mongoose.Types;

  // Validate Resource ID
  if (!ObjectId.isValid(resourceId)) {
    throw new ApiError(400, "Invalid Resource ID");
  }

  // Find Resource
  const resource = await Resource.findById(resourceId);
  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  // Prevent rejecting deleted resource
  if (resource.isDeleted) {
    throw new ApiError(400, "Deleted resources cannot be rejected");
  }

  // Already rejected
  if (resource.status === "rejected") {
    throw new ApiError(400, "Resource is already rejected");
  }

  // Update Status
  resource.status = "rejected";
  resource.isVerified = false;
  resource.rejectedBy = req.user._id;
  resource.rejectedAt = new Date();
  //resource.rejectionReason = req.body.reason || "";
  await resource.save({
    validateBeforeSave: false,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, resource, "Resource rejected successfully"));
});

const getAllResourcesForAdmin = asyncHandler(async (req, res) => {
  // Query Parameters
  // ==========================================
  const {
    page = 1,
    limit = 10,
    search,
    status,
    branch,
    semester,
    year,
    type,
    subject,
    courseCode,
    college,
    visibility,
    uploadedBy,
    showDeleted = "false",
    sort = "latest",
  } = req.query;

  // Pagination
  // ==========================================
  const pageNumber = Math.max(Number(page), 1);
  const limitNumber = Math.max(Number(limit), 1);
  const skip = (pageNumber - 1) * limitNumber;

  // Filters
  // ==========================================
  const filter = {};

  // Deleted Resources
  filter.isDeleted = showDeleted === "true";
  if (status) filter.status = status;
  if (branch) {
    filter.branch = {
      $in: branch.split(",").map((item) => item.trim().toUpperCase()),
    };
  }
  if (semester) filter.semester = Number(semester);
  if (year) filter.year = Number(year);
  if (type) filter.type = type;
  if (visibility) filter.visibility = visibility;
  if (uploadedBy) filter.uploadedBy = uploadedBy;
  if (subject) {
    filter.subject = {
      $regex: subject.trim(),
      $options: "i",
    };
  }
  if (courseCode) {
    filter.courseCode = {
      $regex: courseCode.toUpperCase(),
      $options: "i",
    };
  }
  if (college) {
    filter.college = {
      $regex: college.trim(),
      $options: "i",
    };
  }

  // Search
  // ==========================================
  if (search) {
    filter.$or = [
      {
        title: {
          $regex: search,
          $options: "i",
        },
      },
      {
        subject: {
          $regex: search,
          $options: "i",
        },
      },
      {
        courseCode: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  // Sorting
  // ==========================================
  let sortOption = {};
  switch (sort) {
    case "downloads":
      sortOption = { downloads: -1 };
      break;
    case "views":
      sortOption = { views: -1 };
      break;
    case "rating":
      sortOption = { averageRating: -1 };
      break;
    case "bookmarks":
      sortOption = { bookmarks: -1 };
      break;
    case "oldest":
      sortOption = { createdAt: 1 };
      break;
    case "title-asc":
      sortOption = { title: 1 };
      break;
    case "title-desc":
      sortOption = { title: -1 };
      break;
    case "latest":
    default:
      sortOption = { createdAt: -1 };
  }

  // Fetch Resources
  // ==========================================
  const resources = await Resource.find(filter)
    .populate(
      "uploadedBy",
      "fullname username avatar email branch semester year college role"
    )
    .select("-pdfPublicId -thumbnailPublicId -__v")
    .sort(sortOption)
    .skip(skip)
    .limit(limitNumber)
    .lean();

  // Total Count
  // ==========================================
  const totalResources = await Resource.countDocuments(filter);
  const totalPages = Math.ceil(totalResources / limitNumber);

  // Response
  // ==========================================
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        page: pageNumber,
        limit: limitNumber,
        totalResources,
        totalPages,
        hasNextPage: pageNumber < totalPages,
        hasPreviousPage: pageNumber > 1,
        resources,
      },
      "Resources fetched successfully"
    )
  );
});

const deleteAnyResource = asyncHandler(async (req, res) => {
  // Validate Resource ID
  // ==========================================
  const { resourceId } = req.params;
  const { ObjectId } = mongoose.Types;
  if (!ObjectId.isValid(resourceId)) {
    throw new ApiError(400, "Invalid Resource ID");
  }

  // Find Resource
  // ==========================================
  const resource = await Resource.findById(resourceId);
  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }
  if (resource.isDeleted) {
    throw new ApiError(400, "Resource is already deleted");
  }

  // Soft Delete
  // ==========================================
  resource.isDeleted = true;
  resource.deletedAt = new Date();
  resource.deletedBy = req.user._id;
  await resource.save({
    validateBeforeSave: false,
  });

  // Response
  // ==========================================
  return res
    .status(200)
    .json(new ApiResponse(200, resource, "Resource deleted successfully"));
});

const restoreResource = asyncHandler(async (req, res) => {
  // Validate Resource ID
  // ==========================================
  const { resourceId } = req.params;
  const { ObjectId } = mongoose.Types;
  if (!ObjectId.isValid(resourceId)) {
    throw new ApiError(400, "Invalid Resource ID");
  }

  // Find Resource
  // ==========================================
  const resource = await Resource.findById(resourceId);
  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }
  if (!resource.isDeleted) {
    throw new ApiError(400, "Resource is already active");
  }

  // Restore Resource
  // ==========================================
  resource.isDeleted = false;
  resource.deletedAt = null;
  resource.deletedBy = null;
  await resource.save({
    validateBeforeSave: false,
  });

  // Response
  // ==========================================
  return res
    .status(200)
    .json(new ApiResponse(200, resource, "Resource restored successfully"));
});

const getResourceByIdForAdmin = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;
  const { ObjectId } = mongoose.Types;

  if (!ObjectId.isValid(resourceId)) {
    throw new ApiError(400, "Invalid Resource ID");
  }

  const resource = await Resource.findById(resourceId)
    .populate({
      path: "uploadedBy",
      select: "-password -refreshToken -__v",
    })
    .populate({
      path: "approvedBy",
      select: "fullname",
    })
    .populate({
      path: "rejectedBy",
      select: "fullname",
    })
    .select("-__v -pdfPublicId -thumbnailPublicId");

  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  const resourceObject = resource.toObject();

  //resourceObject.formattedFileSize = formatFileSize(resource.fileSize);
  resourceObject.formattedUploadDate =
    resource.createdAt.toLocaleDateString("en-IN");

  return res
    .status(200)
    .json(
      new ApiResponse(200, resourceObject, "Resource fetched successfully")
    );
});

const getDeletedResources = asyncHandler(async (req, res) => {
  // Query Parameters
  // ==========================================
  const {
    page = 1,
    limit = 10,
    search,
    branch,
    semester,
    type,
    sort = "latest",
  } = req.query;

  // Pagination
  // ==========================================
  const pageNumber = Math.max(Number(page), 1);
  const limitNumber = Math.max(Number(limit), 1);
  const skip = (pageNumber - 1) * limitNumber;

  // Filters
  // ==========================================
  const filter = {
    isDeleted: true,
  };
  if (branch) {
    filter.branch = branch.toUpperCase();
  }
  if (semester) {
    filter.semester = Number(semester);
  }
  if (type) {
    filter.type = type;
  }

  // Search
  // ==========================================
  if (search) {
    filter.$or = [
      {
        title: {
          $regex: search,
          $options: "i",
        },
      },
      {
        subject: {
          $regex: search,
          $options: "i",
        },
      },
      {
        courseCode: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  // Sorting
  // ==========================================
  let sortOption = {};
  switch (sort) {
    case "oldest":
      sortOption = { createdAt: 1 };
      break;

    case "downloads":
      sortOption = { downloads: -1 };
      break;

    case "views":
      sortOption = { views: -1 };
      break;

    default:
      sortOption = { createdAt: -1 };
  }

  // Fetch Resources
  // ==========================================
  const resources = await Resource.find(filter)
    .populate(
      "uploadedBy",
      "fullname username avatar email branch semester year"
    )
    .select("-pdfPublicId -thumbnailPublicId -__v")
    .sort(sortOption)
    .skip(skip)
    .limit(limitNumber)
    .lean();

  // Total Count
  // ==========================================
  const totalResources = await Resource.countDocuments(filter);
  const totalPages = Math.ceil(totalResources / limitNumber);

  // Response
  // ==========================================
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        page: pageNumber,
        limit: limitNumber,
        totalResources,
        totalPages,
        hasNextPage: pageNumber < totalPages,
        hasPreviousPage: pageNumber > 1,
        resources,
      },
      "Deleted resources fetched successfully"
    )
  );
});

// const getAnalytics = asyncHandler(async (req, res) => {
//   // Platform Statistics
//   // ==========================================
//   const platformStats = await Resource.aggregate([
//     {
//       $match: {
//         isDeleted: false,
//       },
//     },
//     {
//       $group: {
//         _id: null,
//         totalResources: {
//           $sum: 1,
//         },
//         totalDownloads: {
//           $sum: "$downloads",
//         },
//         totalViews: {
//           $sum: "$views",
//         },
//         totalBookmarks: {
//           $sum: "$bookmarks",
//         },
//         averageRating: {
//           $avg: "$averageRating",
//         },
//       },
//     },
//   ]);

//   // Resources By Branch
//   // ==========================================
//   const branchWiseResources = await Resource.aggregate([
//     {
//       $match: {
//         isDeleted: false,
//       },
//     },
//     {
//       $group: {
//         _id: "$branch",
//         count: {
//           $sum: 1,
//         },
//       },
//     },
//     {
//       $sort: {
//         count: -1,
//       },
//     },
//   ]);

//   // Resources By Type
//   // ==========================================
//   const typeWiseResources = await Resource.aggregate([
//     {
//       $match: {
//         isDeleted: false,
//       },
//     },
//     {
//       $group: {
//         _id: "$type",
//         count: {
//           $sum: 1,
//         },
//       },
//     },
//     {
//       $sort: {
//         count: -1,
//       },
//     },
//   ]);

//   // Resources By Status
//   // ==========================================
//   const statusWiseResources = await Resource.aggregate([
//     {
//       $group: {
//         _id: "$status",
//         count: {
//           $sum: 1,
//         },
//       },
//     },
//   ]);

//   // Response
//   // ==========================================
//   return res.status(200).json(
//     new ApiResponse(
//       200,
//       {
//         platform: platformStats[0] || {},
//         branchWiseResources,
//         typeWiseResources,
//         statusWiseResources,
//       },
//       "Analytics fetched successfully"
//     )
//   );
// });

const getAnalytics = asyncHandler(async (req, res) => {
  // Platform Statistics
  // ==========================================
  const [
    totalUsers,
    totalDeletedResources,
    totalPendingReports,
    totalResolvedReports,
    totalDismissedReports,
  ] = await Promise.all([
    User.countDocuments(),
    Resource.countDocuments({ isDeleted: true }),
    Report.countDocuments({ status: "pending" }),
    Report.countDocuments({ status: "resolved" }),
    Report.countDocuments({ status: "dismissed" }),
  ]);

  const platformStats = await Resource.aggregate([
    {
      $match: {
        isDeleted: false,
      },
    },
    {
      $group: {
        _id: null,
        totalResources: {
          $sum: 1,
        },
        totalDownloads: {
          $sum: "$downloads",
        },
        totalViews: {
          $sum: "$views",
        },
        averageRating: {
          $avg: "$averageRating",
        },
      },
    },
  ]);

  // Total Bookmarks
  // ==========================================
  const bookmarkStats = await User.aggregate([
    {
      $project: {
        bookmarksCount: {
          $size: {
            $ifNull: ["$bookmarks", []],
          },
        },
      },
    },
    {
      $group: {
        _id: null,
        totalBookmarks: {
          $sum: "$bookmarksCount",
        },
      },
    },
  ]);

  // Resources By Branch
  // ==========================================
  const branchWiseResources = await Resource.aggregate([
    {
      $match: {
        isDeleted: false,
      },
    },
    {
      $group: {
        _id: "$branch",
        count: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
  ]);

  // Resources By Type
  // ==========================================
  const typeWiseResources = await Resource.aggregate([
    {
      $match: {
        isDeleted: false,
      },
    },
    {
      $group: {
        _id: "$type",
        count: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
  ]);

  // Resources By Status
  // ==========================================
  const statusWiseResources = await Resource.aggregate([
    {
      $group: {
        _id: "$status",
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  // Monthly Uploads
  // ==========================================
  const uploadsPerMonth = await Resource.aggregate([
    {
      $match: {
        isDeleted: false,
      },
    },
    {
      $group: {
        _id: {
          year: {
            $year: "$createdAt",
          },
          month: {
            $month: "$createdAt",
          },
        },
        uploads: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        "_id.year": 1,
        "_id.month": 1,
      },
    },
  ]);

  // Response
  // ==========================================
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        platform: {
          totalUsers,
          totalResources: platformStats[0]?.totalResources || 0,
          totalDownloads: platformStats[0]?.totalDownloads || 0,
          totalViews: platformStats[0]?.totalViews || 0,
          totalBookmarks: bookmarkStats[0]?.totalBookmarks || 0,
          averageRating: Number(platformStats[0]?.averageRating || 0).toFixed(
            1
          ),
          deletedResources: totalDeletedResources,
        },

        reports: {
          pending: totalPendingReports,
          resolved: totalResolvedReports,
          dismissed: totalDismissedReports,
        },

        branchWiseResources,
        typeWiseResources,
        statusWiseResources,
        uploadsPerMonth,
      },
      "Analytics fetched successfully."
    )
  );
});
const getAllReports = asyncHandler(async (req, res) => {
  // Query Parameters
  // ==========================================
  const {
    page = 1,
    limit = 10,
    search,
    status,
    reason,
    sort = "latest",
  } = req.query;

  // Pagination
  // ==========================================
  const pageNumber = Math.max(Number(page), 1);
  const limitNumber = Math.max(Number(limit), 1);
  const skip = (pageNumber - 1) * limitNumber;

  // Filters
  // ==========================================
  const filter = {};

  if (status) {
    filter.status = status;
  }

  if (reason) {
    filter.reason = reason;
  }

  // Search
  // ==========================================
  if (search) {
    const resources = await Resource.find({
      title: {
        $regex: search,
        $options: "i",
      },
    }).select("_id");

    filter.resource = {
      $in: resources.map((resource) => resource._id),
    };
  }

  // Sorting
  // ==========================================
  let sortOption = {};

  switch (sort) {
    case "oldest":
      sortOption = {
        createdAt: 1,
      };
      break;

    default:
      sortOption = {
        createdAt: -1,
      };
  }

  // Fetch Reports
  // ==========================================
  const reports = await Report.find(filter)
    .populate("resource", "title subject courseCode thumbnail status")
    .populate("reportedBy", "fullname username avatar")
    .populate("reviewedBy", "fullname username")
    .sort(sortOption)
    .skip(skip)
    .limit(limitNumber)
    .lean();

  // Count
  // ==========================================
  const totalReports = await Report.countDocuments(filter);
  const totalPages = Math.ceil(totalReports / limitNumber);

  // Response
  // ==========================================
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        page: pageNumber,
        limit: limitNumber,
        totalReports,
        totalPages,
        hasNextPage: pageNumber < totalPages,
        hasPreviousPage: pageNumber > 1,
        reports,
      },
      "Reports fetched successfully."
    )
  );
});

const getReportById = asyncHandler(async (req, res) => {
  // Validate Report ID
  // ==========================================
  const { reportId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reportId)) {
    throw new ApiError(400, "Invalid report ID.");
  }

  // Fetch Report
  // ==========================================
  const report = await Report.findById(reportId)
    .populate({
      path: "resource",
      select: "-pdfPublicId -thumbnailPublicId -__v -isDeleted",
      populate: {
        path: "uploadedBy",
        select: "fullname username avatar email",
      },
    })
    .populate("reportedBy", "fullname username avatar email")
    .populate("reviewedBy", "fullname username avatar")
    .lean();

  if (!report) {
    throw new ApiError(404, "Report not found.");
  }

  // Response
  // ==========================================
  return res
    .status(200)
    .json(new ApiResponse(200, report, "Report fetched successfully."));
});

const resolveReport = asyncHandler(async (req, res) => {
  // Validate Report ID
  // ==========================================
  const { reportId } = req.params;
  const { adminNotes = "" } = req.body;

  if (!mongoose.Types.ObjectId.isValid(reportId)) {
    throw new ApiError(400, "Invalid report ID.");
  }

  // Find Report
  // ==========================================
  const report = await Report.findById(reportId);

  if (!report) {
    throw new ApiError(404, "Report not found.");
  }

  if (report.status !== "pending") {
    throw new ApiError(400, "Report has already been reviewed.");
  }

  // Update Report
  // ==========================================
  report.status = "resolved";
  report.reviewedBy = req.user._id;
  report.reviewedAt = new Date();
  report.adminNotes = adminNotes;

  await report.save({ validateBeforeSave: false });

  // Response
  // ==========================================
  return res
    .status(200)
    .json(new ApiResponse(200, report, "Report resolved successfully."));
});

const dismissReport = asyncHandler(async (req, res) => {
  // Validate Report ID
  // ==========================================
  const { reportId } = req.params;
  const { adminNotes = "" } = req.body;

  if (!mongoose.Types.ObjectId.isValid(reportId)) {
    throw new ApiError(400, "Invalid report ID.");
  }

  // Find Report
  // ==========================================
  const report = await Report.findById(reportId);

  if (!report) {
    throw new ApiError(404, "Report not found.");
  }

  if (report.status !== "pending") {
    throw new ApiError(400, "Report has already been reviewed.");
  }

  // Update Report
  // ==========================================
  report.status = "dismissed";
  report.reviewedBy = req.user._id;
  report.reviewedAt = new Date();
  report.adminNotes = adminNotes;

  await report.save({ validateBeforeSave: false });

  // Response
  // ==========================================
  return res
    .status(200)
    .json(new ApiResponse(200, report, "Report dismissed successfully."));
});

const getCategories = asyncHandler(async (req, res) => {
  const { search = "", type, page = 1, limit = 20 } = req.query;

  const filter = {};

  if (type) {
    filter.type = type;
  }

  if (search) {
    filter.name = {
      $regex: search,
      $options: "i",
    };
  }

  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const skip = (pageNumber - 1) * limitNumber;

  const categories = await Category.find(filter)
    .populate("createdBy", "fullname username")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limitNumber);

  const totalCategories = await Category.countDocuments(filter);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        categories,
        page: pageNumber,
        totalPages: Math.ceil(totalCategories / limitNumber),
        totalCategories,
      },
      "Categories fetched successfully."
    )
  );
});

const createCategory = asyncHandler(async (req, res) => {
  const { name, type } = req.body;

  // Validation
  // ==========================================
  if (!name || !type) {
    throw new ApiError(400, "Name and type are required.");
  }

  // Check duplicate
  // ==========================================
  const existingCategory = await Category.findOne({
    name: name.trim(),
    type,
  });

  if (existingCategory) {
    throw new ApiError(409, `${type} "${name}" already exists.`);
  }

  // Create category
  // ==========================================
  const category = await Category.create({
    name: name.trim(),
    type,
    createdBy: req.user._id,
  });

  const createdCategory = await Category.findById(category._id).populate(
    "createdBy",
    "fullname username"
  );

  // Response
  // ==========================================
  return res
    .status(201)
    .json(
      new ApiResponse(201, createdCategory, "Category created successfully.")
    );
});

const updateCategory = asyncHandler(async (req, res) => {
  // Validate Category ID
  // ==========================================
  const { categoryId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    throw new ApiError(400, "Invalid category ID.");
  }

  // Request Body
  // ==========================================
  const { name, isActive } = req.body;

  // Find Category
  // ==========================================
  const category = await Category.findById(categoryId);

  if (!category) {
    throw new ApiError(404, "Category not found.");
  }

  // Duplicate Check
  // ==========================================
  if (name && name.trim() !== category.name) {
    const existingCategory = await Category.findOne({
      _id: { $ne: categoryId },
      name: name.trim(),
      type: category.type,
    });

    if (existingCategory) {
      throw new ApiError(409, `${category.type} "${name}" already exists.`);
    }

    category.name = name.trim();
  }

  // Update Active Status
  // ==========================================
  if (typeof isActive === "boolean") {
    category.isActive = isActive;
  }

  await category.save();

  const updatedCategory = await Category.findById(category._id).populate(
    "createdBy",
    "fullname username"
  );

  // Response
  // ==========================================
  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedCategory, "Category updated successfully.")
    );
});

const deleteCategory = asyncHandler(async (req, res) => {
  // Validate Category ID
  // ==========================================
  const { categoryId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    throw new ApiError(400, "Invalid category ID.");
  }

  // Find Category
  // ==========================================
  const category = await Category.findById(categoryId);

  if (!category) {
    throw new ApiError(404, "Category not found.");
  }

  // Check Usage
  // ==========================================
  let resourceExists = false;

  switch (category.type) {
    case "branch":
      resourceExists = await Resource.exists({
        branch: category.name,
        isDeleted: false,
      });
      break;

    case "subject":
      resourceExists = await Resource.exists({
        subject: category.name,
        isDeleted: false,
      });
      break;

    case "resourceType":
      resourceExists = await Resource.exists({
        type: category.name,
        isDeleted: false,
      });
      break;

    default:
      resourceExists = false;
  }

  if (resourceExists) {
    throw new ApiError(
      400,
      `Cannot delete this ${category.type}. It is currently being used by one or more resources.`
    );
  }

  // Delete Category
  // ==========================================
  await category.deleteOne();

  // Response
  // ==========================================
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Category deleted successfully."));
});

const getSettings = asyncHandler(async (req, res) => {
  // Fetch existing settings
  // ==========================================
  let settings = await Settings.findOne();

  // Create default settings if none exist
  // ==========================================
  if (!settings) {
    settings = await Settings.create({});
  }

  // Response
  // ==========================================
  return res
    .status(200)
    .json(new ApiResponse(200, settings, "Settings fetched successfully."));
});

const updateSettings = asyncHandler(async (req, res) => {
  const { platform, upload, security } = req.body;

  // Fetch existing settings
  // ==========================================
  let settings = await Settings.findOne();

  // Create default settings if none exist
  // ==========================================
  if (!settings) {
    settings = await Settings.create({});
  }

  // Update Platform Settings
  // ==========================================
  if (platform) {
    settings.platform = {
      ...settings.platform.toObject(),
      ...platform,
    };
  }

  // Update Upload Settings
  // ==========================================
  if (upload) {
    settings.upload = {
      ...settings.upload.toObject(),
      ...upload,
    };
  }

  // Update Security Settings
  // ==========================================
  if (security) {
    settings.security = {
      ...settings.security.toObject(),
      ...security,
    };
  }

  // Save
  // ==========================================
  await settings.save();

  // Response
  // ==========================================
  return res
    .status(200)
    .json(new ApiResponse(200, settings, "Settings updated successfully."));
});

export {
  adminDashboard,
  getAllUsers,
  getUserById,
  getPendingResources,
  approveResource,
  rejectResource,
  getAllResourcesForAdmin,
  deleteAnyResource,
  restoreResource,
  getDeletedResources,
  getAnalytics,
  getResourceByIdForAdmin,
  promoteUser,
  deleteUser,
  getAllReports,
  getReportById,
  resolveReport,
  dismissReport,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getSettings,
  updateSettings
};
