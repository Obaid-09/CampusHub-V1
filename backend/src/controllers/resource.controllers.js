import { Resource } from "../models/resource.models.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { formatFileSize } from "../utils/formatFileSize.js";


const uploadResource = asyncHandler(async (req, res) => {

    const {
        title,
        description,
        type,
        subject,
        courseCode,
        branch,
        semester,
        year,
        academicYear,
        college,
        examType,
        tags,
        visibility
    } = req.body;

    // Validation
    if (
        !title?.trim() ||
        !type?.trim() ||
        !subject?.trim() ||
        !branch?.trim() ||
        !semester ||
        !year
    ) {
        throw new ApiError(400, "All required fields are mandatory");
    }

    // Check PDF
    const pdfLocalPath = req.files?.pdf?.[0]?.path;

    if (!pdfLocalPath) {
        throw new ApiError(400, "PDF file is required");
    }

    // Upload PDF
    const pdf = await uploadOnCloudinary(pdfLocalPath);

    if (!pdf?.secure_url) {
        throw new ApiError(500, "Failed to upload PDF");
    }

    // Upload Thumbnail (Optional)
    let thumbnailUrl = "";
    let thumbnailPublicId = "";

    const thumbnailLocalPath = req.files?.thumbnail?.[0]?.path;

    if (thumbnailLocalPath) {

        const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);

        if (thumbnail?.secure_url) {
            thumbnailUrl = thumbnail.secure_url;
            thumbnailPublicId = thumbnail.public_id;
        }
    }

    // Convert Tags
    const tagArray = tags
        ? tags
              .split(",")
              .map(tag => tag.trim())
              .filter(tag => tag.length > 0)
        : [];

    // Create Resource
    const resource = await Resource.create({

        title,
        description,
        type,
        subject,
        courseCode,
        branch,
        semester,
        year,
        academicYear,
        college,
        examType,
        tags: tagArray,
        pdfUrl: pdf.secure_url,
        pdfPublicId: pdf.public_id,
        thumbnail: thumbnailUrl,
        thumbnailPublicId,
        fileSize: pdf.bytes || 0,
        totalPages: pdf.pages || 0,
        pdfOriginalName: pdf.original_filename,
        uploadedBy: req.user._id,
        visibility
    });

    // Update User Uploads
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $push: {
                uploadedResources: resource._id
            }
        }
    );

    // Populate uploader
    const createdResource = await Resource.findById(resource._id)
        .populate(
            "uploadedBy",
            "fullname username avatar branch semester"
        );

    return res.status(201).json(
        new ApiResponse(
            201,
            createdResource,
            "Resource uploaded successfully"
        )
    );

});


const getAllResources = asyncHandler(async (req, res) => {

    // Query Parameters
    // =============================
    const {
        page = 1,
        limit = 12,
        search,
        branch,
        semester,
        year,
        type,
        subject,
        courseCode,
        college,
        examType,
        visibility,
        uploadedBy,
        tags,
        sort = "latest"
    } = req.query;

    // Pagination
    // =============================
    const pageNumber = Math.max(Number(page), 1);
    const limitNumber = Math.min(
        Math.max(Number(limit), 1),
        50
    );
    const skip = (pageNumber - 1) * limitNumber;


    // Filters
    // =============================
    const filter = {
        status: "approved",
        isDeleted: false
    };

    // Visibility
    if (visibility) {
        filter.visibility = visibility.trim().toLowerCase();
    } else {
        filter.visibility = "public";
    }

    if (branch) {
        filter.branch = {
            $in: branch
                .split(",")
                .map(item => item.trim().toUpperCase())
        };
    }

    if (semester) filter.semester = Number(semester);
    if (year) filter.year = Number(year);
    if (type) {
        filter.type = {
            $regex: `^${type.trim()}$`,
            $options: "i"
        };
    }
    if (subject) {
        filter.subject = {
            $regex: subject.trim(),
            $options: "i"
        };
    }
    // if (courseCode) filter.courseCode = courseCode.toUpperCase();
    if (courseCode) {
        filter.courseCode = {
            $regex: courseCode.toUpperCase(),
            $options: "i"
        };
    }
    //if (college) filter.college = college.trim();
    if (college) {
        filter.college = {
            $regex: college.trim(),
            $options: "i"
        };
    }
    if (examType) {
        filter.examType = {
            $regex: `^${examType.trim()}$`,
            $options: "i"
        };
    }

    if (uploadedBy) {
        if (!mongoose.Types.ObjectId.isValid(uploadedBy)) {
            throw new ApiError(
                400,
                "Invalid User ID"
            );
        }

        filter.uploadedBy = uploadedBy;
    }

    if (tags) {
        filter.tags = {
            $in: tags.split(",").map(tag => tag.trim())
        };
    }

    // Search
    // =============================
    if (search) {
        filter.$text = {
            $search: search
        };
    }


    // Sorting
    // =============================
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
    // =============================
    const resources = await Resource.find(filter)
        .populate(
            "uploadedBy",
            "fullname username avatar branch semester"
        )
        .select(
            "title description subject type courseCode branch semester year academicYear college examType tags pdfUrl thumbnail downloads views bookmarks averageRating ratingsCount uploadedBy createdAt"
        )
        .sort(sortOption)
        .skip(skip)
        .limit(limitNumber)
        .lean();



    // Total Count
    // =============================
    const totalResources = await Resource.countDocuments(filter);
    const totalPages = Math.ceil(totalResources / limitNumber);


    // Response
    // =============================
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                page: pageNumber,
                limit: limitNumber,
                currentSort: sort,
                totalResources,
                totalPages,
                hasNextPage: pageNumber < totalPages,
                hasPreviousPage: pageNumber > 1,
                resources
            },
            "Resources fetched successfully"
        )
    );

});


const getResourceById = asyncHandler(async (req, res) => {

    const { resourceId } = req.params;
    const { ObjectId } = mongoose.Types;

    if (!ObjectId.isValid(resourceId)) {
        throw new ApiError(400, "Invalid Resource ID");
    }

    // const resource = await Resource.findById(resourceId)
    //     .populate({
    //         path: "uploadedBy",
    //         select:
    //             "fullname username bio avatar branch semester year college createdAt",
    // });

    // const resource = await Resource.findById(resourceId)
    //     .select(
    //         "-__v -updatedAt -pdfPublicId -thumbnailPublicId -isDeleted"
    //     )
    //     .populate({
    //         path: "uploadedBy",
    //         select:
    //             "-password -refreshToken -__v"
    //     });

    const resource = await Resource.findOne({
        _id: resourceId,
        isDeleted: false,
        status: "approved"
    })
    .populate({
        path: "uploadedBy",
        select: "-password -refreshToken -__v"
    })
    .select(
        "-__v -updatedAt -pdfPublicId -thumbnailPublicId -isDeleted"
    );

    if (!resource) {
        throw new ApiError(404, "Resource not found");
    }

    if (
        resource.visibility === "private" &&
        (
            !req.user ||
            resource.uploadedBy._id.toString() !== req.user._id.toString()
        )
    ) {
        throw new ApiError(
            403,
            "You are not authorized to access this resource"
        );
    }

    const resourceObject = resource.toObject();
    resourceObject.formattedFileSize = formatFileSize(resource.fileSize);
    resourceObject.formattedUploadDate = resource.createdAt.toLocaleDateString("en-IN");

    return res.status(200).json(
        new ApiResponse(
            200,
            resourceObject,
            "Resource fetched successfully"
        )
    );
});


const viewResource = asyncHandler(async (req, res) => {

    const { resourceId } = req.params;
    const { ObjectId } = mongoose.Types;

    if (!ObjectId.isValid(resourceId)) {
        throw new ApiError(400, "Invalid Resource ID");
    }

    const resource = await Resource.findOne({
        _id: resourceId,
        isDeleted: false
    });

    if (!resource) {
        throw new ApiError(404, "Resource not found");
    }

    // Increment Views
    resource.views += 1;
    await resource.save({ validateBeforeSave: false });

    const user = await User.findById(req.user._id);
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    // Logged-in user
    if (req.user) {
        const user = await User.findById(req.user._id);

        // Remove duplicate if already viewed
        user.recentlyViewed = user.recentlyViewed.filter(
            item => item.resource.toString() !== resourceId
        );

        // Add newest at beginning
        user.recentlyViewed.unshift({
            resource: resource._id,
            viewedAt: new Date()
        });

        // Keep only latest 20
        if (user.recentlyViewed.length > 20) {
            user.recentlyViewed = user.recentlyViewed.slice(0, 20);
        }
        await user.save({ validateBeforeSave: false });
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                views: resource.views
            },
            "View recorded successfully"
        )
    );
});

const downloadResource = asyncHandler(async (req, res) => {

    const { resourceId } = req.params;
    const { ObjectId } = mongoose.Types;

    // Validate Resource ID
    // =============================
    if (!ObjectId.isValid(resourceId)) {
        throw new ApiError(400, "Invalid Resource ID");
    }

    // Find Resource
    // =============================
    const resource = await Resource.findOne({
        _id: resourceId,
        isDeleted: false,
        status: "approved"
    });
    if (!resource) {
        throw new ApiError(404, "Resource not found");
    }


    // Increment Download Count
    // =============================
    // resource.downloads += 1;
    // await resource.save({
    //     validateBeforeSave: false
    // });
    const updatedResource = await Resource.findByIdAndUpdate(
        resourceId,
        {
            $inc: {
                downloads: 1
            }
        },
        {
            new: true
        }
    );

    // Update User Download History
    // =============================
    const user = await User.findById(req.user._id);

    // Remove duplicate download
    user.downloads = user.downloads.filter(
        (item) => item.resource.toString() !== resourceId
    );

    // Add newest download
    const downloadTime = new Date();
    user.downloads.unshift({
        resource: resource._id,
        downloadedAt: downloadTime
    });

    // Keep only latest 20 downloads
    if (user.downloads.length > 20) {
        user.downloads = user.downloads.slice(0, 20);
    }
    await user.save({
        validateBeforeSave: false
    });

    // Response
    // =============================
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                resourceId: updatedResource._id,
                pdfUrl: updatedResource.pdfUrl,
                title: updatedResource.title,
                downloads: updatedResource.downloads,
            },
            "Resource downloaded successfully"
        )
    );
});

// const getDownloadHistory = asyncHandler(async (req, res) => {

//     const user = await User.findById(req.user._id)
//         .populate({
//             path: "downloads.resource",
//             select: `
//                 title
//                 subject
//                 type
//                 branch
//                 semester
//                 year
//                 thumbnail
//                 pdfUrl
//                 downloads
//                 averageRating
//                 uploadedBy
//             `,
//             populate: {
//                 path: "uploadedBy",
//                 select: "fullname username avatar"
//             }
//         });

//     if (!user) {
//         throw new ApiError(404, "User not found");
//     }

//     user.downloads.sort(
//         (a, b) => b.downloadedAt - a.downloadedAt
//     );
//     return res.status(200).json(
//         new ApiResponse(
//             200,
//             user.downloads,
//             "Download history fetched successfully"
//         )
//     );

// });


const bookmarkResource = asyncHandler(async (req, res) => {

    const { resourceId } = req.params;
    const { ObjectId } = mongoose.Types;

    // Validate Resource ID
    // ==========================
    if (!ObjectId.isValid(resourceId)) {
        throw new ApiError(400, "Invalid Resource ID");
    }

    // Find Resource
    // ==========================
    const resource = await Resource.findOne({
        _id: resourceId,
        isDeleted: false,
        status: "approved"
    });
    if (!resource) {
        throw new ApiError(404, "Resource not found");
    }

    // Find User
    // ==========================
    const user = await User.findById(req.user._id);

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    // Already Bookmarked?
    // ==========================
    const bookmarkIndex = user.bookmarks.findIndex(
        (item) => item.resource.toString() === resourceId
    );

    let bookmarked = false;
    let updatedResource;

    // Remove Bookmark
    // ==========================
    if (bookmarkIndex !== -1) {
        user.bookmarks.splice(bookmarkIndex, 1);
        updatedResource = await Resource.findByIdAndUpdate(
            resourceId,
            {
                $inc: {
                    bookmarks: -1
                }
            },
            {
                new: true
            }
        );
        bookmarked = false;
    }

    // Add Bookmark
    // ==========================
    else {
        user.bookmarks.unshift({
            resource: resource._id,
            bookmarkedAt: new Date()
        });
        updatedResource = await Resource.findByIdAndUpdate(
            resourceId,
            {
                $inc: {
                    bookmarks: 1
                }
            },
            {
                new: true
            }
        );
        bookmarked = true;
    }
    await user.save({
        validateBeforeSave: false
    });

    // Response
    // ==========================
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                resourceId: updatedResource._id,
                bookmarked,
                bookmarks: updatedResource.bookmarks
            },
            bookmarked
                ? "Resource bookmarked successfully"
                : "Bookmark removed successfully"
        )
    );

});


// const getBookmarks = asyncHandler(async (req, res) => {

//     const user = await User.findById(req.user._id)
//         .populate({
//             path: "bookmarks.resource",
//             select: `
//                 title
//                 description
//                 subject
//                 type
//                 branch
//                 semester
//                 year
//                 thumbnail
//                 pdfUrl
//                 downloads
//                 views
//                 bookmarks
//                 averageRating
//                 uploadedBy
//                 createdAt
//             `,
//             populate: {
//                 path: "uploadedBy",
//                 select: "fullname username avatar"
//             }
//         });

//     if (!user) {
//         throw new ApiError(404, "User not found");
//     }

//     // Keep newest bookmarks first
//     user.bookmarks.sort(
//         (a, b) => b.bookmarkedAt - a.bookmarkedAt
//     );

//     return res.status(200).json(
//         new ApiResponse(
//             200,
//             user.bookmarks,
//             "Bookmarks fetched successfully"
//         )
//     );
// });


// const getRecentlyViewed = asyncHandler(async (req, res) => {

//     const user = await User.findById(req.user._id)
//         .populate({
//             path: "recentlyViewed.resource",
//             select: `
//                 title
//                 description
//                 subject
//                 type
//                 branch
//                 semester
//                 year
//                 thumbnail
//                 pdfUrl
//                 downloads
//                 views
//                 bookmarks
//                 averageRating
//                 uploadedBy
//                 createdAt
//             `,
//             populate: {
//                 path: "uploadedBy",
//                 select: "fullname username avatar"
//             }
//         });

//     if (!user) {
//         throw new ApiError(404, "User not found");
//     }

//     // Keep latest viewed resources first
//     user.recentlyViewed.sort(
//         (a, b) => b.viewedAt - a.viewedAt
//     );

//     return res.status(200).json(
//         new ApiResponse(
//             200,
//             user.recentlyViewed,
//             "Recently viewed resources fetched successfully"
//         )
//     );
// });


// const getMyUploads = asyncHandler(async (req, res) => {

//     const totalUploads = await Resource.countDocuments({
//         uploadedBy: req.user._id,
//         isDeleted: false
//     });

//     const resources = await Resource.find({
//         uploadedBy: req.user._id,
//         isDeleted: false
//     })
//         .select(
//             "-__v -updatedAt -pdfPublicId -thumbnailPublicId -isDeleted"
//         )
//         .populate({
//             path: "uploadedBy",
//             select: "fullname username avatar"
//         })
//         .sort({
//             createdAt: -1
//         });

//     return res.status(200).json(
//         new ApiResponse(
//             200,
//             {
//                 totalUploads,
//                 uploads: resources
//             },
//             "Uploaded resources fetched successfully"
//         )
//     );
// });

const updateResource = asyncHandler(async (req, res) => {

    const { resourceId } = req.params;
    const { ObjectId } = mongoose.Types;

    if (!ObjectId.isValid(resourceId)) {
        throw new ApiError(400, "Invalid Resource ID");
    }

    const resource = await Resource.findOne({
        _id: resourceId,
        isDeleted: false
    });

    if (!resource) {
        throw new ApiError(404, "Resource not found");
    }

    // Owner or Admin
    if (
        resource.uploadedBy.toString() !== req.user._id.toString() &&
        req.user.role !== "admin"
    ) {
        throw new ApiError(
            403,
            "You are not authorized to update this resource"
        );
    }

    const {
        title,
        description,
        subject,
        courseCode,
        branch,
        semester,
        year,
        academicYear,
        examType,
        tags,
        visibility
    } = req.body;

    if (title !== undefined) resource.title = title.trim();
    if (description !== undefined) resource.description = description.trim();
    if (subject !== undefined) resource.subject = subject.trim();
    if (courseCode !== undefined) resource.courseCode = courseCode.trim().toUpperCase();
    if (branch !== undefined) resource.branch = branch.toUpperCase();
    if (semester !== undefined) resource.semester = semester;
    if (year !== undefined) resource.year = year;
    if (academicYear !== undefined) resource.academicYear = academicYear;
    if (examType !== undefined) resource.examType = examType;
    if (visibility !== undefined) resource.visibility = visibility;

    if (tags !== undefined) {
        resource.tags = Array.isArray(tags)
            ? tags
            : tags.split(",").map(tag => tag.trim());
    }

    // Optional Thumbnail Update
    const thumbnailLocalPath = req.files?.thumbnail?.[0]?.path;
    if (thumbnailLocalPath) {
        const thumbnail =
            await uploadOnCloudinary(thumbnailLocalPath);
        if (!thumbnail?.url) {
            throw new ApiError(
                500,
                "Error uploading thumbnail"
            );
        }
        resource.thumbnail = thumbnail.url;
        resource.thumbnailPublicId =
            thumbnail.public_id;

    }
    await resource.save({
        validateBeforeSave: false
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            resource,
            "Resource updated successfully"
        )
    );
});


const deleteResource = asyncHandler(async (req, res) => {

    const { resourceId } = req.params;
    const { ObjectId } = mongoose.Types;

    if (!ObjectId.isValid(resourceId)) {
        throw new ApiError(
            400,
            "Invalid Resource ID"
        );
    }

    const resource = await Resource.findOne({
        _id: resourceId,
        isDeleted: false
    });

    if (!resource) {
        throw new ApiError(
            404,
            "Resource not found"
        );
    }

    if (
        resource.uploadedBy.toString() !== req.user._id.toString() &&
        req.user.role !== "admin"
    ) {
        throw new ApiError(
            403,
            "You are not authorized to delete this resource"
        );
    }

    // Soft Delete
    resource.isDeleted = true;
    await resource.save({
        validateBeforeSave: false
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            "Resource deleted successfully"
        )
    );
});

export {
    uploadResource,
    getAllResources,
    getResourceById,
    viewResource,
    downloadResource,
    bookmarkResource,
    updateResource,
    deleteResource
}