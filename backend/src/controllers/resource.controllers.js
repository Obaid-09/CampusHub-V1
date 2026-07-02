import { Resource } from "../models/resource.models.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";


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
    const limitNumber = Math.max(Number(limit), 1);
    const skip = (pageNumber - 1) * limitNumber;


    // Filters
    // =============================
    const filter = {
        status: "approved",
        isDeleted: false
    };

    // Visibility
    if (visibility) {
        filter.visibility = visibility;
    } else {
        filter.visibility = "public";
    }

    if (branch) filter.branch = branch;
    if (semester) filter.semester = Number(semester);
    if (year) filter.year = Number(year);
    if (type) filter.type = type;
    if (subject) filter.subject = subject;
    if (courseCode) filter.courseCode = courseCode.toUpperCase();
    if (college) filter.college = college;
    if (examType) filter.examType = examType;
    if (uploadedBy) filter.uploadedBy = uploadedBy;

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


export {
    uploadResource,
    getAllResources
}