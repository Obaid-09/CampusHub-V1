import { ApiError } from "../utils/ApiError.js";

export const verifyAdmin = (req, res, next) => {

    if (!req.user) {
        throw new ApiError(401, "Unauthorized Request");
    }

    if (req.user.role !== "admin") {
        throw new ApiError(
            403,
            "Only administrators can access this resource."
        );
    }

    next();
};