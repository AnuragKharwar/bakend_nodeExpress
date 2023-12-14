import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom } from "../controllers/room.controller.js";

const router = express.Router();

router.post("/create/:HotelId", verifyAdmin, createRoom);

export default router;
