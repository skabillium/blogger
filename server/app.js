import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users";
import postRoutes from "./routes/posts";
import authRoutes from "./routes/auth";
import searchRoutes from "./routes/search";

const app = express();

// Connect to database
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

// Use morgan and body parser middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the cookie parser middleware
app.use(cookieParser());

// Grant ability to send requests to browsers outside of localhost
app.use(cors());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/checkAuth", authRoutes);
app.use("/search", searchRoutes);

// If request doesn't get handled by the routers above
// throw error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export default app;
