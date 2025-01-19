# MERN Stack Real-Time Chat Application

This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with additional libraries and features for a modern and seamless user experience.

## Features

- **Real-Time Messaging**: Leveraging `socket.io` for real-time communication between users.
- **Authentication**: Secure JWT-based authentication to manage user sessions.
- **Responsive UI**: Designed with Tailwind CSS and DaisyUI for a modern and responsive interface.
- **Theme Switching**: Users can change the theme of the application (dark mode, light mode, and more).
- **Database**: MongoDB for storing user information and chat data.
- **User Online Status**: Displays whether a user is online or offline in real-time

---

## Tech Stack

### Frontend:

- **React.js**:

  - For building the user interface.

- **Tailwind CSS**:

  - For rapid and customizable styling.

- **DaisyUI**:

  - For pre-built, accessible, and customizable UI components.

- **Axios**:

  - For handling HTTP requests efficiently.

- **Socket.io Client**:

  - Enables real-time communication between client and server.

- **React Router DOM**:

  - For managing navigation and routing in the React app.

- **Zustand**:

  - For lightweight state management.

- **React Hot Toast**:

  - For beautiful and customizable toast notifications.

- **Lucide React**:
  - For adding icons and enhancing the visual interface.

### Backend:

- **Express.js**:
  - Simplifies route management.
  - Handles API requests efficiently.
- **Socket.io**:
  - Enables real-time, bidirectional communication between client and server.
- **MongoDB**:
  - Offers a flexible and scalable database solution.
- **JWT**:
  - Provides secure token-based authentication.
- **Bcrypt.js**:
  - Ensures secure password hashing.
- **Cloudinary**:
  - Handles secure and optimized media storage.
- **Cookie-Parser**:
  - Easily parses cookies for session management.
- **CORS**:
  - Facilitates secure cross-origin communication.
- **Dotenv**:
  - Simplifies environment configuration for different stages of development.
- **Nodemon**:
  - Enhances developer productivity by automatically restarting the server on code changes.

---

## Installation

### Prerequisites:

- Node.js and npm installed on your system.
- MongoDB server running locally or on a cloud provider (e.g., MongoDB Atlas).

### Steps:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies for both frontend and backend**:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `backend` folder and configure the following variables:

   ```env
   PORT=5001
   MONGO_URI=<your_mongo_database_uri>
   JWT_SECRET=<your_jwt_secret>
   CLOUDINARY_URL=<your_cloudinary_url>
   ```

4. **Access the application**:
   Open your browser and navigate to `https://mern-stack-chat-app-veag.onrender.com/`.

---

## Usage

1. **Sign Up/Login**:

   - Create an account or log in to start using the application.

2. **Theme Switching**:

   - Use the theme toggle feature to change the appearance of the app.

3. **Chat in Real-Time**:
   - Select a user to start chatting.
   - Messages will be delivered instantly using `socket.io`.
