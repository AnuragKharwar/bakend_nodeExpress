import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    return res.status(200).json(hotels);
  } catch (err) {
    next(createError(401, "you are not authenticated"));
  }
};

export const getHotelById = async (req, res) => {
  const id = req.params.id;

  try {
    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotelData = async (req, res) => {
  const id = req.params.id;
  try {
    const newHotelData = req.body;
    const updateData = await Hotel.findByIdAndUpdate(
      id,
      { $set: newHotelData },
      {
        new: true,
      }
    );
    return res.status(200).json(updateData);
  } catch (error) {
    next(createError("500", "could not complete"));
  }
};

export const deleteHotel = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    return res.status(200), json(deleteHotel);
  } catch (error) {
    next(createError("500", "try later"));
  }
};
