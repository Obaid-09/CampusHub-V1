import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (err) {
    console.log(err);
    throw new ApiError(
      500,
      "Something went wrong while generating the access and refresh tokens"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // 1) Get User Details from Frontend
  const {
    username,
    fullName,
    email,
    password,
    branch,
    semester,
    year,
    college,
    bio,
  } = req.body;
  college = req.body.college?.trim() || "NIT Warangal";

  // 2) Validation not empty
  if (
    [fullName, email, username, password, branch].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  if (!semester || !year) {
    throw new ApiError(400, "All fields are required");
  }

  // 3) Check if user already exists
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User already exists with given username or email");
  }

  // // 4) Check for Images
  // const avatarLocalPath = req.files?.avatar?.[0]?.path;

  // if (!avatarLocalPath) {
  //   throw new ApiError(400, "Avatar is required");
  // }

  // // 5) Upload to Cloudinary
  // const avatar = await uploadOnCloudinary(avatarLocalPath);

  // if (!avatar?.url) {
  //   throw new ApiError(400, "Error while uploading Avatar");
  // }

  let avatarUrl = process.env.DEFAULT_AVATAR_URL;

  if (req.files?.avatar?.length > 0) {
    const avatarLocalPath = req.files.avatar[0].path;
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar?.url) {
      throw new ApiError(400, "Error while uploading avatar");
    }
    avatarUrl = avatar.url;
  }

  // 6) Create User object and make an entry in DB
  const user = await User.create({
    fullname: fullName,
    username: username.toLowerCase(),
    email,
    password,
    avatar: avatarUrl,
    branch,
    semester,
    year,
    college: college,
    bio,
  });

  // 7) Remove password and RefreshToken
  //   const createdUser = await User.findById(user._id).select(
  //     "-password -refreshToken"
  //   );

  //   // 8) Check for User Creation
  //   if (!createdUser) {
  //     throw new ApiError(500, "Something went wrong while registering");
  //   }

  //   // 9) Sending the response
  //   return res
  //     .status(201)
  //     .json(new ApiResponse(200, createdUser, "User registered Successfully"));

  // Generate Access & Refresh Tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  // Fetch user without password & refresh token
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering");
  }

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  };

  return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        201,
        {
          user: createdUser,
          // accessToken,
          // refreshToken,
        },
        "User registered successfully"
      )
    );
});

const loginUser = asyncHandler(async (req, res) => {
  // 1) Take data from req body
  const { email, username, password } = req.body;

  // 2) Username or email
  if (!(username || email)) {
    throw new ApiError(400, "Username or email is required");
  }

  // 3) Find the user
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(404, "User doesn't exist");
  }

  // 4) Password Check
  const validPassword = await user.isPasswordCorrect(password);
  if (!validPassword) {
    throw new ApiError(404, "Incorrect Password");
  }

  user.lastLogin = new Date();
  await user.save({
    validateBeforeSave: false,
  });

  // 5) Access and Refresh Token
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  // 6) Send Cookie
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    //secure: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User Logged in Successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User Logged out Successfully"));
});

const requestAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized Request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh Token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh Token is Expired");
    }

    const options = {
      httpOnly: true,
      //   secure: true,
      secure: process.env.NODE_ENV === "production",
    };

    const { accessToken, newrefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newrefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newrefreshToken },
          "Access Token Refreshed Successfully"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Refresh Token");
  }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);

  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid Old Password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password Changed Successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "Current User fetched Successfully"));
});

const getUserProfile = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (!username?.trim()) {
    throw new ApiError(400, "Username is required");
  }

  const user = await User.findOne({
    username: username.toLowerCase(),
  })
    .select("-password -refreshToken -email");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const profile = {
    fullname: user.fullname,
    username: user.username,
    avatar: user.avatar,
    bio: user.bio,
    college: user.college,
    branch: user.branch,
    year: user.year,
    semester: user.semester,
    // uploadedResources: user.uploadedResources,
    // uploadsCount: user.uploadedResources.length,
    joinedAt: user.createdAt,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, profile, "User profile fetched successfully"));
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const { fullname, email, branch, semester, year, college, bio } = req.body;

  if (!fullname || !email) {
    throw new ApiError(400, "All Fields are Required");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        fullname,
        email: email,
        branch,
        semester,
        year,
        college,
        bio,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account Details Updated Successfully"));
});

const updateUserAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is missing");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar?.url) {
    throw new ApiError(400, "Error while uploading Avatar");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar Updated Successfully"));
});

const getBookmarks = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate({
    path: "bookmarks.resource",
    select: `
                title
                description
                subject
                type
                branch
                semester
                year
                thumbnail
                pdfUrl
                downloads
                views
                bookmarks
                averageRating
                uploadedBy
                createdAt
            `,
    populate: {
      path: "uploadedBy",
      select: "fullname username avatar",
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Keep newest bookmarks first
  user.bookmarks.sort((a, b) => b.bookmarkedAt - a.bookmarkedAt);

  return res
    .status(200)
    .json(
      new ApiResponse(200, user.bookmarks, "Bookmarks fetched successfully")
    );
});

const getRecentlyViewed = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate({
    path: "recentlyViewed.resource",
    select: `
                title
                description
                subject
                type
                branch
                semester
                year
                thumbnail
                pdfUrl
                downloads
                views
                bookmarks
                averageRating
                uploadedBy
                createdAt
            `,
    populate: {
      path: "uploadedBy",
      select: "fullname username avatar",
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Keep latest viewed resources first
  user.recentlyViewed.sort((a, b) => b.viewedAt - a.viewedAt);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        user.recentlyViewed,
        "Recently viewed resources fetched successfully"
      )
    );
});

const getMyUploads = asyncHandler(async (req, res) => {
  const totalUploads = await Resource.countDocuments({
    uploadedBy: req.user._id,
    isDeleted: false,
  });

  const resources = await Resource.find({
    uploadedBy: req.user._id,
    isDeleted: false,
  })
    .select("-__v -updatedAt -pdfPublicId -thumbnailPublicId -isDeleted")
    .populate({
      path: "uploadedBy",
      select: "fullname username avatar",
    })
    .sort({
      createdAt: -1,
    });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        totalUploads,
        uploads: resources,
      },
      "Uploaded resources fetched successfully"
    )
  );
});

const getDownloadHistory = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate({
    path: "downloads.resource",
    select: `
                title
                subject
                type
                branch
                semester
                year
                thumbnail
                pdfUrl
                downloads
                averageRating
                uploadedBy
            `,
    populate: {
      path: "uploadedBy",
      select: "fullname username avatar",
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  user.downloads.sort((a, b) => b.downloadedAt - a.downloadedAt);
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        user.downloads,
        "Download history fetched successfully"
      )
    );
});

export {
  updateUserAvatar,
  updateAccountDetails,
  registerUser,
  loginUser,
  logoutUser,
  requestAccessToken,
  getCurrentUser,
  changeCurrentPassword,
  getBookmarks,
  getDownloadHistory,
  getMyUploads,
  getRecentlyViewed,
  getUserProfile,
};
