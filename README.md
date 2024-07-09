# RentABook Backend

RentABook is a MERN stack application for renting eBooks. This repository contains the backend code, including API endpoints for managing users and books.

## Features

- User Authentication (Register/Login)
- CRUD operations for Books
- Rental periods (7 days, 1 month, lifetime)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (for authentication)
- dotenv (for environment variables)

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/nik6348/RentABook-backend.git
   ```
   cd RentABook-backend
   
2. Install dependencies:
``` npm install ```

3. Create a .env file in the root directory and add your MongoDB connection string:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the server:
``` npm start ```
