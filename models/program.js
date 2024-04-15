const mongoose = require("mongoose");

const intakeSchema = new mongoose.Schema({
  season: { type: String, required: true },
  status: { type: String, required: true },
  deadline: { type: String, required: false }, // Assuming deadline can still be empty
  _id: mongoose.Schema.Types.ObjectId,
});

const programSchema = new mongoose.Schema({
  FieldOfStudy: { type: String, required: true },
  InstituteName: { type: String, required: true },
  Title: { type: String, required: true },
  Level: { type: String, required: true },
  Length: { type: Number, required: true },
  Intake: [intakeSchema],
  Language: { type: String, required: true },
  Fee: { type: String, required: true },
  ApplicationFee: { type: String, required: true },
  IeltsReading: { type: Number, required: true },
  IeltsWriting: { type: Number, required: true },
  IeltsOverall: { type: Number, required: true },
  IeltsSpeaking: { type: Number, required: true },
  IeltsListening: { type: Number, required: true },
  DuolingoOverall: { type: Number, required: true },
  PteOverall: { type: Number, required: true },
  PteListening: { type: Number, default: 0 },
  PteReading: { type: Number, default: 0 },
  PteWriting: { type: Number, default: 0 },
  PteSpeaking: { type: Number, default: 0 },
  TOEFLOverall: { type: Number, required: true },
  TOEFLListening: { type: Number, required: true },
  TOEFLReading: { type: Number, required: true },
  TOEFLWriting: { type: Number, required: true },
  TOEFLSpeaking: { type: Number, required: true },
  City: { type: String, required: true },
  Province: { type: String, required: true },
  Country: { type: String, required: true },
  Percentage: { type: Number, required: true },
  Backlog: { type: Number, required: true },
  Gap: { type: Number, required: true },
  PreviousEducation: { type: String, required: true },
  WorkExperiences: { type: String, required: true },
  GRE: { type: Number, default: 0 },
  GMAT: { type: Number, default: 0 },
  PR: { type: String, required: true },
  InstituteCategory: {
    type: String,
    required: true,
    enum: ["Direct", "In Direct", "No Tie up"],
  },
  Notes: { type: String, required: true },
  Dataadder: { type: String, required: true },
  __v: { type: Number, required: true },
  CreatedOn: { type: String, required: true }, // Consider using Date type if it stores date information
  Campus: { type: String, required: true },
});

const Program =
  mongoose.models.Program || mongoose.model("Program", programSchema);
module.exports = { Program };
