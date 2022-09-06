import express from "express";
import thoughtModel from "../models/thoughtModel.js";

const router = express.Router();

// GET all thoughts
router.get("/", (req, res) => {
  res.status(200);
  res.json({ status: res.status, success: true, payload: "GET all thoughts" });
});

// GET a single thought
router.get("/:id", (req, res) => {
  res.status(200);
  res.json({
    success: true,
    payload: "GET single thought by id",
  });
});

// POST a new thought
router.post("/", async (req, res) => {
  const {
    situation,
    thought,
    thought_rating,
    emotions,
    behaviours,
    evidence_for,
    evidence_against,
    balanced_thought,
    balanced_rating,
  } = req.body;

  try {
    const newThought = await thoughtModel.create({
      situation,
      thought,
      thought_rating,
      emotions,
      behaviours,
      evidence_for,
      evidence_against,
      balanced_thought,
      balanced_rating,
    });
    res.status(201).json({
      message: "POST new thought",
      success: true,
      payload: newThought,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      payload: null,
    });
  }
});

// DELETE a thought
router.delete("/:id", (req, res) => {
  res.status(200);
  res.json({
    success: true,
    payload: "DELETE a single thought",
  });
});

// PATCH a thought
router.patch("/:id", (req, res) => {
  res.status(200);
  res.json({
    success: true,
    payload: "UPDATE a single thought",
  });
});

export default router;
