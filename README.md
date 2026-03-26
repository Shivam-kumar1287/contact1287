# Contact Manager Web App

A complete MERN stack Contact Management Web Application with authentication, built with modern technologies and best practices.

## 🚀 Features

### Authentication
- User registration and login
- JWT-based authentication
- Protected routes
- Secure password hashing with bcrypt

### Contact Management
- ✅ Create new contacts
- ✅ View all contacts with pagination
- ✅ Search contacts by name, email, or phone
- ✅ Update existing contacts
- ✅ Delete contacts with confirmation
- ✅ Responsive card-based layout
- ✅ Form validation
- ✅ Loading states and error handling

### UI/UX
- Modern, responsive design with TailwindCSS
- Toast notifications for user feedback
- Loading spinners
- Mobile-friendly navigation
- Clean and intuitive interface

## 🛠 Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **TailwindCSS** - CSS framework
- **Axios** - HTTP client
- **React Hot Toast** - Notification system

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation

### Deployment
- **Vercel** - Frontend and serverless backend
- **MongoDB Atlas** - Cloud database

## 📁 Project Structure

```
contact-manager/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── ContactCard.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── AddContact.jsx
│   │   │   └── EditContact.jsx
│   │   ├── context/           # React context
│   │   │   └── AuthContext.jsx
│   │   ├── services/          # API services
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── server/                     # Express backend
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic
│   │   └── contactController.js # Contact CRUD logic
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── Contact.js         # Contact schema
│   ├── routes/
│   │   ├── authRoutes.js      # Authentication routes
│   │   └── contactRoutes.js   # Contact routes
│   ├── server.js              # Main server file
│   └── package.json
├── .env.example               # Environment variables template
├── vercel.json               # Vercel deployment configuration
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (for cloud database)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd contact-manager
   ```

2. **Install dependencies**
   ```bash
   # Install all dependencies at once
   npm run install-all
   
   # Or install separately
   npm install
   cd server && npm install
   cd ../client && npm install
   ```

3. **Set up environment variables**

   **Root directory (.env):**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/contact-manager?retryWrites=true&w=majority
   JWT_SECRET=your-super-secret-jwt-key-here
   PORT=5000
   FRONTEND_URL=http://localhost:5173
   ```

   **Client directory (client/.env):**
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Set up MongoDB Atlas**
   - Create a free MongoDB Atlas account
   - Create a new cluster
   - Create a database user
   - Get your connection string and update `MONGODB_URI` in the .env file

5. **Run the application**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start separately
   # Backend (terminal 1)
   cd server && npm run dev
   
   # Frontend (terminal 2)
   cd client && npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Contacts
- `GET /api/contacts` - Get all contacts (with pagination and search)
- `POST /api/contacts` - Create a new contact
- `PUT /api/contacts/:id` - Update a contact
- `DELETE /api/contacts/:id` - Delete a contact

### API Response Format

**Success Response:**
```json
{
  "success": true,
  "data": {
    // Response data
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message"
}
```

## 🚀 Deployment

### Deploy to Vercel

1. **Prepare for deployment**
   - Make sure all environment variables are set in Vercel
   - Update `VITE_API_URL` in client/.env to your production URL

2. **Deploy with Vercel CLI**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Environment Variables in Vercel**
   - `MONGODB_URI` - Your MongoDB connection string
   - `JWT_SECRET` - Your JWT secret key
   - `FRONTEND_URL` - Your deployed frontend URL

### Manual Deployment

**Frontend (Vercel):**
1. Connect your GitHub repository to Vercel
2. Set the root directory to `client`
3. Configure build command: `npm run build`
4. Configure output directory: `dist`

**Backend (Vercel Serverless):**
1. The backend is automatically configured through `vercel.json`
2. API routes are served from `/api/*`

## 🔧 Configuration

### Environment Variables

**Server (.env):**
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (default: 5000)
- `FRONTEND_URL` - Frontend URL for CORS

**Client (.env):**
- `VITE_API_URL` - Backend API URL

## 🧪 Testing

The application includes:
- Form validation on both client and server side
- Error handling with user-friendly messages
- Loading states for better UX
- Protected routes with authentication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your MONGODB_URI in .env
   - Ensure your IP is whitelisted in MongoDB Atlas
   - Verify database user credentials

2. **CORS Error**
   - Make sure FRONTEND_URL is correctly set
   - Check that the frontend URL is whitelisted

3. **JWT Authentication Issues**
   - Verify JWT_SECRET is set
   - Check token expiration (7 days by default)

4. **Build Errors**
   - Ensure all dependencies are installed
   - Check Node.js version compatibility
   - Clear node_modules and reinstall if needed

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section above
2. Review the code comments
3. Create an issue in the repository

---

**Built with ❤️ using the MERN stack**
