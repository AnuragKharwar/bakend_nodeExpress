import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./api/routes/auth.js";
import authHotel from "./api/routes/hotel.js";
import authUsers from "./api/routes/users.js";
import authRooms from "./api/routes/rooms.js";
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

app.use(express.json());
app.use("/auth", authRoute);
app.use("/hotel", authHotel);
app.use("/user", authUsers);
app.use("/rooms", authRooms);

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
