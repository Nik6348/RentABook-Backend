import { RESPONSE_MESSAGES } from "../config/responseMessages.js";
import { apiError } from "./apiResponse";

// handle async requests and errors
export const asyncHandler = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            apiError(res, error.statusCode || 500, error.message || RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
        }
    };
};