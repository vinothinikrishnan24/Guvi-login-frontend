Guvi-login-frontend
This is a React-based frontend application for user authentication, built with Vite and designed to interact with the Guvi-login-backend API. It provides a user interface for signup, login, forgot password, reset password, and verification of reset codes. The backend API runs on http://localhost:5000, and the frontend runs on http://localhost:5173.
Table of Contents

Features
Technologies
Installation
API Integration
Environment Variables
Usage
Contributing
License

Features

User-friendly interface for registration and login
Forgot password form with reset code verification
Password reset functionality
Responsive design for desktop and mobile
Secure communication with the backend API

Technologies

React.js
Vite (build tool)
Axios for API requests
React Router (optional, for navigation)
CSS or a styling framework (e.g., Bootstrap, Tailwind CSS)
Other dependencies (e.g., react-toastify for notifications)

Installation

Clone the repository:git clone https://github.com/vinothinikrishnan24/Guvi-login-frontend.git


Navigate to the project directory:cd Guvi-login-frontend


Install dependencies:npm install


Set up environment variables (see Environment Variables).
Start the development server:npm run dev

The application will run on http://localhost:5173.

API Integration
The frontend communicates with the Guvi-login-backend API running on http://localhost:5000. Ensure the backend server is running before starting the frontend. The following endpoints are used:



Method
Endpoint
Description



POST
/register
Register a new user


POST
/login
Authenticate a user and receive a JWT


POST
/forgot-password
Request a password reset code


POST
/verify-reset-code
Verify the reset code


POST
/reset-password
Reset the user's password


Example API Request (using Axios)
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Register a user
axios.post(`${API_URL}/register`, {
  email: 'user@example.com',
  password: 'yourpassword'
})
.then(response => console.log('User registered:', response.data))
.catch(error => console.error('Error:', error.response.data));

Environment Variables
Create a .env file in the root directory with the following variable:
VITE_API_URL=http://localhost:5000

Usage

Ensure the backend server (Guvi-login-backend) is running on http://localhost:5000.
Start the frontend development server with npm run dev.
Open http://localhost:5173 in your browser.
Use the interface to:
Register a new account
Log in with existing credentials
Request a password reset code
Verify the reset code and set a new password



Contributing

Fork the repository: https://github.com/vinothinikrishnan24/Guvi-login-frontend.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

License
This project is licensed under the MIT License.
