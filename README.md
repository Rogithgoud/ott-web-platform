# 🎬 OTT Web Platform (MERN Stack)

A full-stack video streaming web application inspired by popular OTT platforms, built using the MERN stack.  
This project focuses on secure authentication, RESTful APIs, database integration, and dynamic content rendering.

---

## 🚀 Features

- 🔐 User Authentication & Authorization  
  - Secure signup, login, and logout  
  - JWT-based authentication using HTTP-only cookies  

- 🎥 Browse Movies & TV Shows  
  - Trending, popular, and categorized content  

- 🔍 Dynamic Content Rendering  
  - Movie and TV show data fetched from the TMDB API  

- 👤 Protected Routes  
  - Auth-protected frontend and backend routes  

- 📱 Responsive UI  
  - Optimized for desktop and mobile devices  

- 🗄️ Database Integration  
  - User and application data stored in MongoDB Atlas  

---

## 🛠️ Tech Stack

### Frontend
- React  
- Vite    
- Axios  
- CSS / Tailwind CSS  

### Backend
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  

### Authentication & APIs
- JWT (HTTP-only Cookies)  
- TMDB API  

---

## 📂 Project Structure

```bash
Netflix-clone/
│
├── frontend/        # React application
│   ├── src/
│   └── vite.config.js
│
├── backend/         # Node + Express API
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
