import { body, query, param } from "express-validator";


export const uploadResourceValidator = [

    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ min: 3, max: 100 })
        .withMessage("Title must be between 3 and 100 characters"),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 1000 })
        .withMessage("Description cannot exceed 1000 characters"),

    body("type")
        .notEmpty()
        .withMessage("Resource type is required")
        .isIn([
            "Notes",
            "PYQ",
            "Assignment",
            "Lab Manual",
            "Book",
            "Presentation",
            "Cheat Sheet",
            "Other"
        ])
        .withMessage("Invalid resource type"),

    body("subject")
        .trim()
        .notEmpty()
        .withMessage("Subject is required"),

    body("courseCode")
        .optional()
        .trim()
        .toUpperCase(),

    body("branch")
        .notEmpty()
        .withMessage("Branch is required")
        .isIn([
            "CSE",
            "ECE",
            "EEE",
            "ME",
            "CE",
            "CHE",
            "MME",
            "BT",
            "Other"
        ])
        .withMessage("Invalid branch"),

    body("semester")
        .notEmpty()
        .withMessage("Semester is required")
        .isInt({ min: 1, max: 8 })
        .withMessage("Semester must be between 1 and 8"),

    body("year")
        .notEmpty()
        .withMessage("Year is required")
        .isInt({ min: 1, max: 4 })
        .withMessage("Year must be between 1 and 4"),

    body("academicYear")
        .optional()
        .trim(),

    body("college")
        .optional()
        .trim(),

    body("examType")
        .optional()
        .isIn([
            "Mid Sem",
            "End Sem",
            "Quiz",
            "Assignment",
            "Other"
        ]),

    body("visibility")
        .optional()
        .isIn([
            "public",
            "private"
        ]),

    body("tags")
        .optional()
        .custom(value => {

            if (typeof value === "string") return true;

            if (Array.isArray(value)) return true;

            throw new Error("Tags should be a comma separated string or an array");

        })

];


export const updateResourceValidator = [

    body("title")
        .optional()
        .trim()
        .isLength({ min: 3, max: 100 }),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 1000 }),

    body("subject")
        .optional()
        .trim(),

    body("courseCode")
        .optional()
        .trim()
        .toUpperCase(),

    body("branch")
        .optional()
        .isIn([
            "CSE",
            "ECE",
            "EEE",
            "ME",
            "CE",
            "CHE",
            "MME",
            "BT",
            "Other"
        ]),

    body("semester")
        .optional()
        .isInt({ min: 1, max: 8 }),

    body("year")
        .optional()
        .isInt({ min: 1, max: 4 }),

    body("academicYear")
        .optional()
        .trim(),

    body("college")
        .optional()
        .trim(),

    body("examType")
        .optional()
        .isIn([
            "Mid Sem",
            "End Sem",
            "Quiz",
            "Assignment",
            "Other"
        ]),

    body("visibility")
        .optional()
        .isIn([
            "public",
            "private"
        ]),

    body("tags")
        .optional()
        .custom(value => {

            if (typeof value === "string") return true;

            if (Array.isArray(value)) return true;

            throw new Error("Invalid tags");

        })

];


export const resourceIdValidator = [

    param("resourceId")
        .isMongoId()
        .withMessage("Invalid Resource ID")

];


export const getResourcesValidator = [

    query("page")
        .optional()
        .isInt({ min: 1 }),

    query("limit")
        .optional()
        .isInt({ min: 1, max: 50 }),

    query("semester")
        .optional()
        .isInt({ min: 1, max: 8 }),

    query("year")
        .optional()
        .isInt({ min: 1, max: 4 }),

    query("visibility")
        .optional()
        .isIn([
            "public",
            "private"
        ]),

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


export const downloadResourceValidator = [
    ...resourceIdValidator
];



export const bookmarkResourceValidator = [
    ...resourceIdValidator
];


export const viewResourceValidator = [
    ...resourceIdValidator
];


export const deleteResourceValidator = [
    ...resourceIdValidator
];



export const getResourceByIdValidator = [
    ...resourceIdValidator
];



