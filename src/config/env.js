import dotenv from 'dotenv';
dotenv.config();

// Database configuration
export const MONGO_URI = process.env.MONGO_URI;
export const PORT = process.env.PORT || 5000;

// JWT configuration
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME;


// AWS S3 configuration
export const S3_BUCKET = process.env.S3_BUCKET;
export const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY;
export const S3_SECRET_KEY = process.env.S3_SECRET_KEY;
export const S3_REGION = process.env.S3_REGION;
export const S3_URL = `https://${S3_BUCKET}.s3.${S3_REGION}.amazonaws.com`;

// Redis configuration
export const REDIS_HOST = process.env.REDIS_HOST;
export const REDIS_PORT = process.env.REDIS_PORT;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;