# Full Stack Realtime Chat App

This repository contains the source code for EchoLink, a full stack real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) along with Socket.io for real-time communication.

## Features

- **Real-time Messaging**: Facilitates instant communication between users.
- **User Authentication & Authorization**: Implemented using JSON Web Tokens (JWT).
- **Online User Status**: Displays the current online status of users.
- **Global State Management**: Managed with Zustand for efficient state handling.
- **Responsive Design**: Styled with TailwindCSS and Daisy UI for a seamless user experience across devices.
- **Error Handling**: Robust error management on both client and server sides.

## Tech Stack

- **Frontend**: React, Zustand, TailwindCSS, Daisy UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Real-time Communication**: Socket.io

## Getting Started

### Prerequisites

- MongoDB instance.
- Cloudinary account for image storage.

### Installation and Configuration

1. **Clone the repository**:

   ```
   git clone https://github.com/RyanW848/EchoLink.git
   ```

2. **Navigate to the project directory backend**:
   
   ```
   cd EchoLink/backend
   ```

3. **Setup .env file**:
   
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5001
   JWT_SECRET=your_jwt_secret
    
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    
   NODE_ENV=development
   ```

### Running the Application

1. **Navigate to the project directory**:

   ```
   cd EchoLink
   ```

2. **Build the app**:
   
   ```
   npm run build
   ```

3. **Start the app**:
   
   ```
   npm run start
   ```

### Running the Application

This project is licensed under the MIT License. See the [LICENSE](https://github.com/RyanW848/EchoLink/blob/main/.gitignore) file for details.
   
