# 📚 CampusHub Backend

CampusHub Backend is a scalable RESTful API built using **Node.js**, **Express.js**, and **MongoDB** that serves as the backend for a college resource-sharing platform.

The platform enables students to securely upload, manage, discover, and download academic resources such as **Notes, Previous Year Question Papers (PYQs), Assignments, Lab Manuals, Books, and Presentations**. It provides robust authentication, role-based authorization, file management, search capabilities, and an administrative moderation system.

The backend is designed following industry-standard practices including **MVC Architecture**, **JWT Authentication**, **Request Validation**, **REST API Design**, **Swagger Documentation**, **Soft Delete**, **Cloudinary File Storage**, and **Role-Based Access Control (RBAC)**.

---

# ✨ Features

## 🔐 Authentication & Authorization
- User Registration
- Secure Login & Logout
- JWT Authentication
- Access Token & Refresh Token
- HTTP Only Cookies
- Change Password
- Update Profile
- Update Avatar
- Current User Endpoint
- Role Based Access Control (Student/Admin)

---

## 📂 Resource Management
Students can:
- Upload study resources
- Upload PDF with thumbnail
- Edit uploaded resources
- Delete their own resources (Soft Delete)
- View resource details
- Download resources
- Bookmark resources
- View recently viewed resources
- Access download history
- View all uploaded resources

Supported resource types include:
- Notes
- Previous Year Question Papers (PYQs)
- Assignments
- Lab Manuals
- Books
- Presentations
- Cheat Sheets
- Other Academic Resources

---

## 🔍 Advanced Search & Filtering
- Full Text Search
- Filter by Branch
- Filter by Semester
- Filter by Year
- Filter by Subject
- Filter by Course Code
- Filter by College
- Filter by Resource Type
- Filter by Exam Type
- Filter by Visibility
- Tag-based Search
- Pagination
- Sorting

Sorting Options:
- Latest
- Oldest
- Most Downloaded
- Most Viewed
- Highest Rated
- Most Bookmarked
- Title (Ascending/Descending)

---

## 👨‍💼 Admin Module
The platform includes a dedicated admin panel with role-based access.

Admins can:
- View dashboard statistics
- Manage users
- View all uploaded resources
- View pending resources
- Approve uploaded resources
- Reject uploaded resources
- Delete any resource
- Restore deleted resources
- View deleted resources
- Access platform analytics

Dashboard Statistics include:
- Total Users
- Total Students
- Total Admins
- Total Resources
- Pending Resources
- Approved Resources
- Rejected Resources
- Deleted Resources
- Total Downloads
- Total Views
- Total Bookmarks

---

## 📄 API Documentation
Interactive API documentation is available using Swagger UI.
Features include:
- Interactive API Testing
- JWT Authorization Support
- Request Body Schemas
- Response Schemas
- Error Responses
- File Upload Documentation

---

## 🛡 Security
- JWT Authentication
- HTTP Only Cookies
- Password Hashing using bcrypt
- Helmet Security Middleware
- Rate Limiting
- CORS Protection
- Input Validation
- Global Error Handling

---

## ☁ File Storage
Academic resources are stored securely using **Cloudinary**.
Supported uploads:
- PDF Files
- Resource Thumbnails

---

## 📊 Analytics
The backend provides analytics for administrators.
Examples:
- Downloads
- Views
- Bookmarks
- Branch-wise Resources
- Resource Type Distribution
- Approval Statistics

---

# 🛠 Tech Stack
## Backend
- Node.js
- Express.js
## Database
- MongoDB
- Mongoose
## Authentication
- JWT (JSON Web Tokens)
- bcrypt
## File Upload
- Multer
- Cloudinary
## Validation
- express-validator
## API Documentation
- Swagger
- swagger-jsdoc
- swagger-ui-express
## Security
- Helmet
- CORS
- express-rate-limit
## Logging
- Morgan
## Development Tools
- Nodemon
- dotenv

---

# 🏗 Project Architecture
The backend follows the **MVC (Model-View-Controller)** architecture to ensure clean code organization, modularity, and scalability.
```
Client (React / Flutter / Postman)
│
▼
Express Routes
│
▼
Middlewares
│
├── JWT Authentication
├── Admin Authorization
├── Validation
├── Multer Upload
├── Rate Limiting
├── Error Handling
│
▼
Controllers
│
▼
Business Logic
│
▼
Models (Mongoose)
│
▼
MongoDB Atlas
│
▼
Cloudinary
```
### Architecture Flow
Client Request
↓
Express Router
↓
Authentication Middleware
↓
Validation Middleware
↓
Controller
↓
Database / Cloudinary
↓
API Response

```

---

# 📁 Folder Structure
```text
backend/
│
├── public/
│
├── src/
│   │
│   ├── controllers/
│   │   ├── user.controllers.js
│   │   ├── resource.controllers.js
│   │   └── admin.controllers.js
│   │
│   ├── models/
│   │   ├── user.models.js
│   │   └── resource.models.js
│   │
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── resource.routes.js
│   │   └── admin.routes.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── admin.middleware.js
│   │   ├── multer.middleware.js
│   │   ├── validate.middleware.js
│   │   ├── error.middleware.js
│   │   └── rateLimit.middleware.js
│   │
│   ├── validators/
│   │   ├── user.validators.js
│   │   ├── resource.validators.js
│   │   └── admin.validators.js
│   │
│   ├── docs/
│   │   ├── swagger.js
│   │   ├── schemas.swagger.js
│   │   ├── responses.swagger.js
│   │   ├── user.swagger.js
│   │   ├── resource.swagger.js
│   │   └── admin.swagger.js
│   │
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   ├── cloudinary.js
│   │   └── validateEnv.js
│   │
│   ├── db/
│   │
│   ├── app.js
│   └── index.js
│
├── .env.example
├── package.json
├── README.md
└── .gitignore
```

---

### 📌 Design Principles
- MVC Architecture
- RESTful API Design
- Modular Code Structure
- Separation of Concerns
- Role-Based Access Control (RBAC)
- Soft Delete Strategy
- Centralized Error Handling
- Production-Ready Middleware
- Interactive Swagger Documentation
- Scalable Folder Organization

---

### 🚀 Highlights
- 25+ REST API Endpoints
- JWT Authentication with Refresh Tokens
- Role-Based Authorization (Student/Admin)
- Cloudinary Integration for File Storage
- Swagger API Documentation
- Full CRUD Operations
- Advanced Search, Filtering & Pagination
- Secure File Uploads
- Admin Moderation System
- Production-Ready Middleware Stack


# ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/<your-username>/CampusHub.git
cd CampusHub/backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root and add the required environment variables (see `.env.example`).

### Start Development Server

```bash
npm run dev
```

The backend will start at:

```text
http://localhost:8000
```

---

# 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server Port |
| `MONGODB_URI` | MongoDB Connection String |
| `ACCESS_TOKEN_SECRET` | JWT Access Token Secret |
| `ACCESS_TOKEN_EXPIRY` | Access Token Expiry |
| `REFRESH_TOKEN_SECRET` | JWT Refresh Token Secret |
| `REFRESH_TOKEN_EXPIRY` | Refresh Token Expiry |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary Cloud Name |
| `CLOUDINARY_API_KEY` | Cloudinary API Key |
| `CLOUDINARY_API_SECRET` | Cloudinary API Secret |
| `CORS_ORIGIN` | Allowed Frontend Origin |
> Refer to the `.env.example` file for the required format.

---

# 📖 API Documentation

The backend provides interactive API documentation using **Swagger (OpenAPI 3.0)**.
After starting the server, visit:

```text
http://localhost:8000/api-docs
```

Swagger allows you to:
- View all available endpoints
- Test APIs interactively
- Authorize using JWT Bearer Token
- Inspect request & response schemas
- View validation and error responses

---

# 🔐 Authentication Flow

CampusHub uses **JWT Authentication** with **Access Token** and **Refresh Token**.

```text
Register / Login
        │
        ▼
Access Token + Refresh Token
        │
        ▼
Protected Routes
        │
        ▼
verifyJWT Middleware
        │
        ▼
Authorized Request
```
Role-Based Access Control (RBAC):
- **Student** → Upload, View, Download, Bookmark Resources
- **Admin** → User Management, Resource Moderation, Analytics

---

# 🗄️ Database Models
The application currently consists of two primary models:

### 👤 User

Stores user information including:
- Authentication Details
- Profile Information
- Role (Student/Admin)
- Bookmarks
- Download History
- Recently Viewed Resources

### 📄 Resource

Stores academic resources including:
- Resource Metadata
- PDF & Thumbnail URLs
- Subject & Branch Details
- Uploader Information
- Views, Downloads & Bookmarks
- Visibility & Approval Status
- Soft Delete Information



# 🛡️ Middleware

The backend uses middleware to ensure security, validation, and maintainability.

| Middleware | Purpose |
|------------|---------|
| `verifyJWT` | Authenticates protected routes |
| `optionalVerifyJWT` | Allows both authenticated and guest users |
| `verifyAdmin` | Restricts access to admin-only endpoints |
| `multer` | Handles PDF and thumbnail uploads |
| `express-validator` | Validates request parameters and body |
| `helmet` | Adds security headers |
| `cors` | Configures Cross-Origin Resource Sharing |
| `express-rate-limit` | Prevents API abuse and brute-force attacks |
| `morgan` | Logs incoming HTTP requests |
| `errorHandler` | Centralized error handling |

---

# 🌐 API Endpoints
The API is organized into three modules:

### 👤 User APIs
- Authentication (Register, Login, Logout)
- Profile Management
- Password Management
- Avatar Upload

### 📚 Resource APIs
- Upload Resource
- View & Search Resources
- Update & Delete Resources
- Download Resources
- Bookmark Resources
- Recently Viewed
- Download History
- My Uploads

### 👨‍💼 Admin APIs
- Dashboard Statistics
- User Management
- Resource Moderation
- Approve / Reject Resources
- Restore Deleted Resources
- Platform Analytics

For complete endpoint details, visit the Swagger documentation at:

```text
http://localhost:8000/api-docs
```

---

# ⚠️ Error Handling
The project implements centralized error handling using custom `ApiError` and `ApiResponse` classes.

Features include:
- Standardized API responses
- Validation error handling
- Authentication & Authorization errors
- Resource not found handling
- Global exception handling
- Development stack traces (development mode only)

Example Response:
```json
{
  "success": false,
  "statusCode": 404,
  "message": "Resource not found"
}
```

---

# 🚀 Deployment
The backend is deployment-ready and can be hosted on platforms such as **Render**, **Railway**, or **Vercel Functions** (serverless).

Before deployment:
- Configure environment variables
- Set up MongoDB Atlas
- Configure Cloudinary credentials
- Update CORS origin
- Build and deploy the server

---

# 🔮 Future Improvements
Planned enhancements include:
- Resource Rating & Reviews
- Resource Comments
- Email Verification
- Forgot Password & OTP
- Notifications
- AI-powered Resource Recommendation
- Advanced Analytics Dashboard
- Full-text Search Optimization
- Unit & Integration Testing
- Docker Support
- CI/CD Pipeline
- Redis Caching
- Elasticsearch Integration

---

# 👨‍💻 Author
**Obaidullah**

Pre-Final Year Undergraduate  
Department of Electrical Engineering  
National Institute of Technology Warangal

- GitHub: https://github.com/Obaid-09
- LinkedIn: https://www.linkedin.com/in/obaidullahhassaan
---

⭐ If you found this project useful, consider giving the repository a **star**.


