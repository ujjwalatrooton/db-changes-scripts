const mongoose = require("mongoose");
const scoreSchema = new mongoose.Schema({
    examName: { type: String, required: true },
    listening: { type: Number, required: false, default: 0 },
    speaking: { type: Number, required: false, default: 0 },
    reading: { type: Number, required: false, default: 0 },
    writing: { type: Number, required: false, default: 0 },
    overall: { type: Number, required: false, default: 0 },
  });
  
  const Score =
    mongoose.models.Score || mongoose.model("Score", scoreSchema);
  module.exports = { Score };