import express from 'express';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';
import rentalRoutes from './routes/rentalRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { PORT } from './config/env';
import cors from 'cors';
import connectDB from './db/database';

// create a new express application instance
const app = express();

// configure express middleware for CORS, JSON parsing, and error handling
app.use(cors());
app.use(express.json());
app.use(errorHandler)

// connect to MongoDB database
connectDB();

// define routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/rentals', rentalRoutes);

// start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));