import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const createdRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: createdRoom._id },
      });
    } catch (error) {
      next(error);
    }
    return res.status(200).json(createdRoom);
  } catch (error) {
    return next(createError(500, "something went wrong"));
  }
};

export const updateRoom = async (req, res, next) => {
  const roomId = req.params.id;

  try {
    const updatedRoom = await Room.findOneAndUpdate(
      roomId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateRoom);
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(createError(500, "can't find all rooms"));
  }
};

//logic is remaining
export const getAvailableRoom = async (req, res, next) => {
  try {
  } catch (error) {}
};
