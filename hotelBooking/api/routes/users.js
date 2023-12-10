import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/", (req, res) => {
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
