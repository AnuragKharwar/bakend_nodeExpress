import express from "express";
import { createError } from "../utils/error.js";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotelById,
  updateHotelData,
} from "../controllers/hotel.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/", getAllHotel);
router.get("/:id", getHotelById);
router.post("/create", verifyAdmin, createHotel);
router.put("/update/:id", verifyAdmin, updateHotelData);
router.delete("/delete/:id", verifyAdmin, deleteHotel);

export default router;

//patch = update
