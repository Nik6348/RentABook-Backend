import { RESPONSE_MESSAGES } from "../config/responseMessages";
import { apiError } from "../utills/apiResponse";

// Middlewares for authentication and authorization
export const checkAdmin = (req, res, next) => {
    try {
        if (!req.user || req.user.role !== 'admin') {
            apiError(res, 403, RESPONSE_MESSAGES.FORBIDDEN);
        }
        next();
    }
    catch (error) {
        apiError(res, 500, RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
    }
};

