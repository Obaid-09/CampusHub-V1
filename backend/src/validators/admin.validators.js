import { param, query } from "express-validator";

export const adminDashboardValidator = [];

export const getAllUsersValidator = [

    query("page")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Page must be greater than 0"),

    query("limit")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Limit must be greater than 0"),

    query("role")
        .optional()
        .isIn(["student", "admin"])
        .withMessage("Invalid role"),

    query("branch")
        .optional()
        .isString(),

    query("year")
        .optional()
        .isInt({ min: 1, max: 4 }),

    query("semester")
        .optional()
        .isInt({ min: 1, max: 8 }),

    query("sort")
        .optional()
        .isIn([
            "latest",
            "oldest",
            "fullname"
        ])

];

export const getUserByIdValidator = [

    param("userId")
        .isMongoId()
        .withMessage("Invalid User ID")

];

export const getPendingResourcesValidator = [

    query("page")
        .optional()
        .isInt({ min: 1 }),

    query("limit")
        .optional()
        .isInt({ min: 1 }),

    query("semester")
        .optional()
        .isInt({ min: 1, max: 8 }),

    query("branch")
        .optional()
        .isString(),

    query("type")
        .optional()
        .isString(),

    query("sort")
        .optional()
        .isIn([
            "latest",
            "oldest",
            "downloads",
            "views"
        ])

];

export const approveResourceValidator = [

    param("resourceId")
        .isMongoId()
        .withMessage("Invalid Resource ID")

];

export const rejectResourceValidator = [

    param("resourceId")
        .isMongoId()
        .withMessage("Invalid Resource ID")

];


export const getAllResourcesForAdminValidator = [

    query("page")
        .optional()
        .isInt({ min: 1 }),

    query("limit")
        .optional()
        .isInt({ min: 1 }),

    query("status")
        .optional()
        .isIn([
            "pending",
            "approved",
            "rejected"
        ]),

    query("visibility")
        .optional()
        .isIn([
            "public",
            "private"
        ]),

    query("semester")
        .optional()
        .isInt({ min: 1, max: 8 }),

    query("year")
        .optional()
        .isInt({ min: 1, max: 4 }),

    query("sort")
        .optional()
        .isIn([
            "latest",
            "oldest",
            "downloads",
            "views",
            "rating",
            "bookmarks",
            "title-asc",
            "title-desc"
        ])

];

export const deleteAnyResourceValidator = [

    param("resourceId")
        .isMongoId()
        .withMessage("Invalid Resource ID")

];

export const restoreResourceValidator = [

    param("resourceId")
        .isMongoId()
        .withMessage("Invalid Resource ID")

];

export const getDeletedResourcesValidator = [

    query("page")
        .optional()
        .isInt({ min: 1 }),

    query("limit")
        .optional()
        .isInt({ min: 1 }),

    query("semester")
        .optional()
        .isInt({ min: 1, max: 8 }),

    query("sort")
        .optional()
        .isIn([
            "latest",
            "oldest",
            "downloads",
            "views"
        ])

];

export const getAnalyticsValidator = [];

export {
    adminDashboardValidator,
    getAllUsersValidator,
    getUserByIdValidator,
    getPendingResourcesValidator,
    approveResourceValidator,
    rejectResourceValidator,
    getAllResourcesForAdminValidator,
    deleteAnyResourceValidator,
    restoreResourceValidator,
    getDeletedResourcesValidator,
    getAnalyticsValidator
};