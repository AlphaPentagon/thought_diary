import thoughtModel from "../models/thoughtModel.js";
import mongoose from "mongoose";

// get all thoughts
export const getAllThoughts = async (req, res) => {
  try {
    const allThoughts = await thoughtModel.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      message: "GET all thoughts",
      success: true,
      payload: allThoughts,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      payload: null,
    });
  }
};

// get a single thought
export const getThoughtById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: `No such thought with id of ${id}`,
        success: false,
        payload: [],
      });
    }
    const thought = await thoughtModel.find({ _id: id });

    console.log(thought);
    if (thought.length === 0) {
      return res.status(400).json({
        message: `No such thought with id of ${id}`,
        success: false,
        payload: [],
      });
    }
    res.status(200).json({
      message: `GET thought by id of ${id}`,
      success: true,
      payload: thought,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      payload: null,
    });
  }
};

// create a new thought
export const createThought = async (req, res) => {
  const {
    date,
    time,
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

  // add thought to database
  try {
    const newThought = await thoughtModel.create({
      date,
      time,
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
      message: "POSTED new thought",
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
};

// delete a thought
export const deleteThoughtByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: `No such thought with id of ${id}`,
        success: false,
        payload: [],
      });
    }
    const deletedThought = await thoughtModel.findOneAndDelete({ _id: id });
    if (!deletedThought) {
      return res.status(400).json({
        message: `No such thought with id of ${id}`,
        success: false,
        payload: [],
      });
    }
    res.status(200).json({
      message: `DELETED thought with id of ${id}`,
      success: true,
      payload: deletedThought,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      payload: null,
    });
  }
};

// update a thought

export const updateThoughtByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: `No such thought with id of ${id}`,
        success: false,
        payload: [],
      });
    }
    const updatedThought = await thoughtModel.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!updatedThought) {
      return res.status(400).json({
        message: `No such thought with id of ${id}`,
        success: false,
        payload: [],
      });
    }
    res.status(200).json({
      message: `UPDATED thought with id of ${id}`,
      success: true,
      payload: updatedThought,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      payload: null,
    });
  }
};
