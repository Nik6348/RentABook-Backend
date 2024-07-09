import { apiResponse } from "../utills/apiResponse";

// Error handler middleware for Express.js applications
export const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    // Log the error details using Winston
    logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    // Return a JSON response with the error details
    apiResponse(res, statusCode, message, null);

    // End the request-response cycle
    next();
};