# 🎬 OTT Web Platform (MERN Stack)

🚀 **Live Demo**
- **Frontend:** https://ott-web-platform-frontend.vercel.app  
- **Backend API:** https://ott-web-platform.vercel.app  

A full-stack **OTT (Over-The-Top) video streaming web application** inspired by platforms like Netflix.  
This project is built using the **MERN stack** and demonstrates secure authentication, protected routes, real-time API integration, and production-ready deployment.

---

## ✨ Features

### 🔐 Authentication & Security
- User Signup, Login, Logout
- JWT-based authentication
- Secure **HttpOnly cookies**
- Protected backend routes

### 🎥 Movies & TV Shows
- Trending movies & TV shows
- Movie & TV details
- Trailers and similar content
- Category-based browsing

### 🔍 Search
- Search movies, TV shows, and people
- User-specific search history
- Remove items from search history

### 🧠 State Management
- Global state management using **Zustand**
- Persistent authentication state

### 🌐 External API Integration
- Real-time data from **TMDB API**

### ☁️ Deployment
- Backend deployed on **Vercel**
- Frontend deployed on **Vercel**
- MongoDB Atlas cloud database

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Zustand
- Axios
- Tailwind CSS
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Cookie-based authentication
- TMDB API

### Deployment & Tools
- Vercel
- MongoDB Atlas
- Git & GitHub

---

## 📂 Project Structure

ott-web-platform/
│
├── Backend/
│ ├── controllers/
│ ├── routes/
│ ├── middleware/
│ ├── models/
│ ├── services/
│ ├── utils/
│ ├── config/
│ └── server.js
│
├── Frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── store/
│ │ ├── pages/
│ │ ├── components/
│ │ └── App.jsx
│ └── main.jsx
│
└── README.md

## Disclaimer
* This project is built strictly for educational purposes.
* It is not affiliated with Netflix or any other OTT platform.
* All movie and TV data is sourced from the TMDB API.