const mongoose = require("mongoose");
const programTypeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
  });
  
  const ProgramType =
    mongoose.models.ProgramType || mongoose.model("ProgramType", programTypeSchema);
  module.exports = { ProgramType };