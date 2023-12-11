import express from "express";
import User from "../models/User.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.status(200).send("User verified");
});

router.get("/", verifyUser, (req, res) => {
  res.send("Hello from users");
});

router.post("/create", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.send(500).json(error);
  }
});
export default router;
