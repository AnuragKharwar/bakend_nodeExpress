import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.controller.js";

const router = express.Router();

router.get("/allrooms", getAllRooms);
// router.get("/:id", getRoom);
router.post("/:hotelid", verifyAdmin, createRoom);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id", verifyAdmin, deleteRoom);

export default router;
