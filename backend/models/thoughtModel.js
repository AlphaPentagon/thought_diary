import mongoose from "mongoose";

const Schema = mongoose.Schema;

const thoughtSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    situation: {
      type: String,
      required: true,
    },
    thought: {
      type: String,
      required: true,
    },
    thought_rating: {
      type: Number,
      required: true,
    },
    emotions: {
      type: String,
      required: true,
    },
    behaviours: {
      type: String,
      required: true,
    },
    evidence_for: {
      type: String,
      required: true,
    },
    evidence_against: {
      type: String,
      required: true,
    },
    balanced_thought: {
      type: String,
      required: true,
    },
    balanced_rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Thought", thoughtSchema);
