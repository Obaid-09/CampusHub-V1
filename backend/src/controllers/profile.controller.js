import mongoose from "mongoose";
import { Resource } from "../models/resource.models.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"

const getProfileStats = async (userId) => {
  const user = await User.findById(userId).select("bookmarks downloads");

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

    downloads: user.downloads.length,

    bookmarks: user.bookmarks.length,

    views: views.length > 0 ? views[0].totalViews : 0,
  };
};

const getRecentlyViewed = async (userId) => {
  const user = await User.findById(userId).populate({
    path: "recentlyViewed.resource",

    select: `
                title
                subject
                type
                thumbnail
                uploadedBy
                downloads
                views
            `,

    populate: {
      path: "uploadedBy",
      select: "fullname avatar",
    },
  });

  return user.recentlyViewed
    .sort((a, b) => b.viewedAt - a.viewedAt)
    .slice(0, 5);
};

const getRecentActivity = async (userId) => {
  const user = await User.findById(userId)
    .populate({
      path: "downloads.resource",
      select: "title",
    })
    .populate({
      path: "recentlyViewed.resource",
      select: "title",
    });

  const uploads = await Resource.find({
    uploadedBy: userId,
    isDeleted: false,
  }).select("title createdAt");

  const uploadActivities = uploads.map((resource) => ({
    type: "upload",
    resourceId: resource._id,
    title: resource.title,
    message: `Uploaded ${resource.title}`,
    time: resource.createdAt,
  }));

  const downloadActivities = user.downloads
    .filter((item) => item.resource)
    .map((item) => ({
      type: "download",
      resourceId: item.resource._id,
      title: item.resource.title,
      message: `Downloaded ${item.resource.title}`,
      time: item.downloadedAt,
    }));

  const viewedActivities = user.recentlyViewed
    .filter((item) => item.resource)
    .map((item) => ({
      type: "view",
      resourceId: item.resource._id,
      title: item.resource.title,
      message: `Viewed ${item.resource.title}`,
      time: item.viewedAt,
    }));

  return [...uploadActivities, ...downloadActivities, ...viewedActivities]
    .sort((a, b) => b.time - a.time)
    .slice(0, 10);
};

const getProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const [stats, recentlyViewed, recentActivity] = await Promise.all([
    getProfileStats(userId),
    getRecentlyViewed(userId),
    getRecentActivity(userId),
  ]);

  const user = await User.findById(userId).select("-password -refreshToken");

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
        stats,
        recentlyViewed,
        recentActivity,
      },
      "Profile fetched successfully"
    )
  );
});

export {
    getProfile,
};