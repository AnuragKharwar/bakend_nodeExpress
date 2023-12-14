import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routerAuth from "./api/routes/auth.js";
import routeHotel from "./api/routes/hotel.js";
import routeUsers from "./api/routes/users.js";
import routeRooms from "./api/routes/room.js";
import CookieParser from "cookie-parser";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongo db");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
app.use(CookieParser());
app.use(express.json());

app.use("/api/auth", routerAuth);
app.use("/api/hotel", routeHotel);
app.use("/api/user", routeUsers);
app.use("/api/room", routeRooms);

// for error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!!";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8000, () => {
  connect();
  console.log("App is running on port 8000");
});
