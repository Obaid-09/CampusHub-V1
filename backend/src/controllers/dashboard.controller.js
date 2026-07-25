import mongoose from "mongoose";
import { Resource } from "../models/resource.models.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getStatsData = async (userId) => {
  const user = await User.findById(userId).select(
    "bookmarks downloads viewedResources"
  );

  const uploads = await Resource.countDocuments({
    uploadedBy: userId,
    isDeleted: false,
  });

  const views = await Resource.aggregate([
    {
      $match: {
        uploadedBy: new mongoose.Types.ObjectId(userId),
        isDeleted: false,
      },
    },
    {
      $group: {
        _id: null,
        totalViews: {
          $sum: "$views",
        },
      },
    },
  ]);

  return {
    uploads,
    bookmarks: user.bookmarks.length,
    downloads: user.downloads.length,
    views: views.length ? views[0].totalViews : 0,
  };
};

const getRecentActivityData = async (userId) => {
  const user = await User.findById(userId).populate({
    path: "recentlyViewed.resource",
    select: "title subject thumbnail type",
  });

  return user.recentlyViewed
    .sort((a, b) => b.viewedAt - a.viewedAt)
    .slice(0, 5);
};

const getTrendingResourcesData = async () => {
  return await Resource.find({
    status: "approved",
    visibility: "public",
    isDeleted: false,
  })
    .populate("uploadedBy", "fullname avatar")
    .sort({
      downloads: -1,
      views: -1,
    })
    .limit(5);
};

const getRecommendedResourcesData = async (user) => {
  return await Resource.find({
    branch: user.branch,
    semester: user.semester,
    status: "approved",
    visibility: "public",
    isDeleted: false,
  })
    .populate("uploadedBy", "fullname avatar")
    .sort({
      createdAt: -1,
    })
    .limit(5);
};

const getProgressData = async (userId) => {
  const user = await User.findById(userId).select(
    "bookmarks downloads viewedResources"
  );

  const uploads = await Resource.countDocuments({
    uploadedBy: userId,
    isDeleted: false,
  });

  return {
    viewed: user.viewedResources.length,
    bookmarked: user.bookmarks.length,
    downloaded: user.downloads.length,
    uploaded: uploads,
  };
};

const getDashboard = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  const [
    stats,
    recentActivity,
    trendingResources,
    recommendedResources,
    progress,
  ] = await Promise.all([
    getStatsData(req.user._id),
    getRecentActivityData(req.user._id),
    getTrendingResourcesData(),
    getRecommendedResourcesData(user),
    getProgressData(req.user._id),
  ]);

  return res.status(200).json(
    new ApiResponse(
      200,

      {
        stats,
        recentActivity,
        trendingResources,
        recommendedResources,
        progress,
      },
      "Dashboard fetched successfully"
    )
  );
});

export { getDashboard };
