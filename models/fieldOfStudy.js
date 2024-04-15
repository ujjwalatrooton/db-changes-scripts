const mongoose = require("mongoose");
const fieldOfStudySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
  });
  
  const FieldOfStudy =
    mongoose.models.FieldOfStudy || mongoose.model("FieldOfStudy", fieldOfStudySchema);
  module.exports = { FieldOfStudy };