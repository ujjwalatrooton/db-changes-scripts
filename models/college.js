const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  dlino: { type: String, required: false },
  country: { type: [String], required: true },
  province: { type: [String], required: true },
  city: { type: [String], required: true },
  category: {
    type: String,
    required: true,
    enum: ["Direct", "In Direct", "No Tie Up"],
  },
});

const College =
  mongoose.models.College || mongoose.model("College", CollegeSchema);
module.exports = { College };
