import express from "express";

const router = express.Router();

router.get("/api", (req, res) => {
  res.send("helo from auth ");
});
export default router;
