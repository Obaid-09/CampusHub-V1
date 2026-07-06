import { ApiError } from "../utils/ApiError.js";

export const errorHandler = (err, req, res, next) => {

    let error = err;

    if (!(error instanceof ApiError)) {
        error = new ApiError(
            error.statusCode || 500,
            error.message || "Internal Server Error",
            error.errors || [],
            error.stack
        );
    }

    return res.status(error.statusCode).json({
        success: false,
        statusCode: error.statusCode,
        message: error.message,
        errors: error.errors || [],
        ...(process.env.NODE_ENV === "development" && {
            stack: error.stack
        })
    });

};