import mongoose from "mongoose";

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  p5Balance: {
    type: Number,
    default: 100, // Default P5 balance set to 100
  },
  rewardBalance: {
    type: Number,
    default: 0,
  },
  rewardHistory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RewardHistory",
  },
});

export default mongoose.model("User", userSchema);
