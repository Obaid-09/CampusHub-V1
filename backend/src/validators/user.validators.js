import { body } from "express-validator";

export const registerValidator = [

    body("fullname")
        .trim()
        .notEmpty()
        .withMessage("Full name is required")
        .isLength({ min: 3, max: 50 })
        .withMessage("Full name must be between 3 and 50 characters"),

    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
        .isLength({ min: 3, max: 20 })
        .withMessage("Username must be between 3 and 20 characters")
        .matches(/^[a-zA-Z0-9_]+$/)
        .withMessage(
            "Username can only contain letters, numbers and underscore"
        ),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Enter a valid email")
        .normalizeEmail(),

    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must contain at least 6 characters"),

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

    body("college")
        .optional()
        .trim(),

    body("bio")
        .optional()
        .trim()
        .isLength({ max: 300 })
        .withMessage("Bio cannot exceed 300 characters")
];


export const loginValidator = [

    body("password")
        .notEmpty()
        .withMessage("Password is required"),

    body("email")
        .optional()
        .trim()
        .isEmail()
        .withMessage("Invalid email"),

    body("username")
        .optional()
        .trim()
];


export const changePasswordValidator = [

    body("oldPassword")
        .notEmpty()
        .withMessage("Old password is required"),

    body("newPassword")
        .notEmpty()
        .withMessage("New password is required")
        .isLength({ min: 6 })
        .withMessage("Password must contain at least 6 characters")
];


export const updateProfileValidator = [

    body("fullname")
        .optional()
        .trim()
        .isLength({ min: 3, max: 50 }),

    body("email")
        .optional()
        .trim()
        .isEmail()
        .withMessage("Invalid email"),

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

    body("college")
        .optional()
        .trim(),

    body("bio")
        .optional()
        .trim()
        .isLength({ max: 300 })
];


