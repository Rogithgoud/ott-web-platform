import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";


import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import { protectRoute } from './middleware/protectRoute.js';

const app=express(); 
const PORT = ENV_VARS.PORT

app.use(express.json());//will allow us to parse req.body
app.use(cookieParser()); 

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ott-web-platform-frontend.vercel.app"
    ],
    credentials: true,
  })
);


app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie",protectRoute,movieRoutes);
app.use("/api/v1/tv",protectRoute,tvRoutes);
app.use("/api/v1/search",protectRoute,searchRoutes);

console.log("MONGO_URI: ", process.env.MONGO_URI);

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
    connectDB();
  });
}

export default app;


