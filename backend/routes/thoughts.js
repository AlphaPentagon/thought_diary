import express from "express";

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
router.post("/", (req, res) => {
  res.status(201);
  res.json({
    success: true,
    payload: "POST a new single thought",
  });
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
