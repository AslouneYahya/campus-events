# Campus Events Hub 🎓

A modern, full-stack web application for managing and discovering campus events. Built with Node.js, Express, and SQLite, this platform enables seamless event management for both organizers and participants.

![Campus Events Hub](https://via.placeholder.com/800x400?text=Campus+Events+Hub)

## 🌟 Key Features

### User Features
- **Authentication & Authorization**
  - Secure user registration and login
  - JWT-based authentication
  - Role-based access control (User/Organizer)
  - Password hashing and security
  - Session management

- **Event Discovery**
  - Browse all campus events
  - Filter events by category, date, or location
  - Search functionality with real-time results
  - Event recommendations based on interests
  - Calendar view of upcoming events

- **Event Management**
  - Register for events
  - View registered events
  - Cancel registrations
  - Receive event reminders
  - Share events on social media

### Organizer Features
- **Event Creation & Management**
  - Create detailed event listings
  - Upload event images
  - Set event capacity and registration deadlines
  - Manage event categories and tags
  - Track event attendance

- **Analytics Dashboard**
  - View registration statistics
  - Track attendance rates
  - Generate event reports
  - Monitor user engagement
  - Export data for analysis

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js (v14+)
- **Framework**: Express.js
- **Database**: SQLite3
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger/OpenAPI
- **Testing**: Jest
- **Logging**: Winston

### Frontend
- **Framework**: Vanilla JavaScript
- **Styling**: CSS3 with modern features
- **State Management**: Custom event system
- **Build Tools**: npm scripts
- **Development**: Live reload with Nodemon

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git
- A modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation & Setup

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/campus-events-hub.git
cd campus-events-hub
```

2. **Install Dependencies**
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. **Environment Setup**
Create a `.env` file in the backend directory with the following content:
```env
PORT=5000
JWT_SECRET=your_secure_secret_key_here
DB_PATH=./database/events.db
NODE_ENV=development
```

4. **Create Database Directory**
```bash
# From the backend directory
mkdir database
```

## 🏃‍♂️ Running the Application

1. **Start Backend Server**
```bash
cd backend
npm run dev
```
The backend server will run on http://localhost:5000

2. **Start Frontend Server**
```bash
cd frontend
npm run dev
```
The frontend server will run on http://localhost:3002

3. **Access the Application**
Open your web browser and navigate to http://localhost:3002

## 🔧 Troubleshooting

### Common Issues and Solutions

1. **Port Already in Use**
   - If you see "EADDRINUSE" error, it means the port is already in use
   - Solution: Kill all Node.js processes and try again
   ```bash
   # On Windows
   taskkill /F /IM node.exe
   
   # On Linux/Mac
   pkill node
   ```

2. **Database Connection Issues**
   - If you see "SQLITE_CANTOPEN" error, ensure:
     - The database directory exists
     - The application has write permissions
     - The DB_PATH in .env is correct

3. **Authentication Errors**
   - If login/register fails with 500 error:
     - Check if JWT_SECRET is set in .env
     - Ensure the database is properly initialized
     - Check server logs for detailed error messages

4. **CORS Issues**
   - If you see CORS errors in the browser console:
     - Ensure the backend server is running
     - Check if the frontend is making requests to the correct URL
     - Verify CORS middleware is properly configured

## 📁 Project Structure

```
campus-events-hub/
├── backend/
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   ├── database/        # SQLite database files
│   ├── .env            # Environment variables
│   ├── package.json    # Backend dependencies
│   └── server.js       # Main server file
├── frontend/
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   ├── assets/         # Images and media
│   ├── package.json    # Frontend dependencies
│   └── server.js       # Frontend server
└── README.md
```

## 🔐 Security Notes

- Never commit the `.env` file to version control
- Use a strong, unique JWT_SECRET in production
- Keep your Node.js and dependencies updated
- Regularly backup the database

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- ASLOUNE Yahya - ED-DHIBI Youssef - Initial work - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by [Project Name]
- Built with [Technology Name]

## 📞 Support

For support, email support@campuseventshub.com or open an issue in the repository. 
