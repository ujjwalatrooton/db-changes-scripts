const mongoose = require("mongoose");
const intakeSchema = new mongoose.Schema({
    name: { type: String, required: true },
  });
  
  const Intake =
    mongoose.models.Intake || mongoose.model("Intake", intakeSchema);
  module.exports = { Intake };