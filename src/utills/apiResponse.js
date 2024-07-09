import logger from './logger';

// handlers for API responses
export const apiResponse = (res, statusCode, message, data) => {
    // Send the response to the client with the appropriate status code and JSON payload
    res.status(statusCode).json({ message, data });

    // Log API response for auditing or debugging purposes  
    logger.info(`API Response: Status Code - ${statusCode}, Message - ${message}, Data - ${JSON.stringify(data)}`);
};

// handlers for API errors
export const apiError = (res, statusCode, message) => {
    // Send the error response to the client with the appropriate status code and JSON payload
    res.status(statusCode).json({ message, error: res.error });

    // Log API error for auditing or debugging purposes
    logger.error(`API Error: Status Code - ${statusCode}, Message - ${message}, Error - ${res.error}`);
};