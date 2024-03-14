// models/RewardHistory.js
import mongoose from "mongoose";

const rewardHistorySchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  points: {
    type: Number,
    required: true,
  },
  givenBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  givenTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("RewardHistory", rewardHistorySchema);
