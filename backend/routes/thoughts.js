import express from "express";
import {
  createThought,
  deleteThoughtByID,
  getAllThoughts,
  getThoughtById,
  updateThoughtByID,
} from "../controllers/thoughtController.js";

const router = express.Router();

// GET all thoughts
router.get("/", getAllThoughts);

// GET a single thought
router.get("/:id", getThoughtById);

// POST a new thought
router.post("/", createThought);

// DELETE a thought
router.delete("/:id", deleteThoughtByID);

// PATCH a thought
router.patch("/:id", updateThoughtByID);

export default router;
