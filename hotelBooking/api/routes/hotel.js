import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotelById,
  updateHotelData,
} from "../controllers/hotel.controller.js";

const router = express.Router();

router.get("/", getAllHotel);
router.get("/:id", getHotelById);
router.post("/create", createHotel);
router.patch("/update/:id", updateHotelData);
router.patch("/delete/:id", deleteHotel);

export default router;

//patch = update
