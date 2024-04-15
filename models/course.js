const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  FieldOfStudy: { type: Schema.Types.ObjectId, required: true },
  InstituteName: { type: Schema.Types.ObjectId, required: true },
  Title: { type: String, required: true },
  Level: { type: String, required: true },
  Length: { type: Number, required: true },
  Intake: { type: Schema.Types.ObjectId, required: true },
  Language: { type: String, required: true },
  Fee: { type: String, required: true },
  IELTS: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  ApplicationFee:{
    type:String,
    required:true
  },
  Duolingo: { type: Schema.Types.ObjectId, required: true },
  PTE: { type: Schema.Types.ObjectId, required: true },
  TOEFL: { type: Schema.Types.ObjectId, required: true },
  Percentage: { type: Number, required: true },
  Backlog: { type: Number, required: true },
  Gap: { type: Number, required: true },
  PreviousEducation: { type: String, required: true },
  WorkExperiences: { type: String, required: true },
  Gre: { type: Number, required: false },
  Gmat: { type: Number, required: false },
  Pr: { type: String, required: true,enum:["Low","Medium","High"] },
  Notes: { type: String, required: true },
  DataAdder: { type: Schema.Types.ObjectId, required: true },
  Type: { type: String, required: false , enum:["Course based", "Thesis based", "Research based", "Project Based"]},
  IndirectPartner: { type: String, required: false },
  CAEL: { type: Schema.Types.ObjectId, required: false },
  PreRequirement: { type: String, required: false },
  TCFCanada: { type: Schema.Types.ObjectId, required: false },
  TEFCanada: { type: Schema.Types.ObjectId, required: false },
  ProgramCurriculum: { type: String, required: false },
  PossibleCareerOpportunities: {
    type: [Schema.Types.ObjectId],
    required: false,
  },
  PerHourSalary: {
    Min: { type: Number, required: false },
    Max: { type: Number, required: false },
  },
  TradeLicensesCertifications: {
    type: [Schema.Types.ObjectId],
    required: false,
  },
  SourceLinks: [
    {
      Title: { type: String, required: true },
      Link: { type: String, required: true },
    },
  ],
});

courseSchema.index({
  Fee: "text",
  ApplicationFee: "text",
  PreviousEducation: "text",
  WorkExperiences: "text",
  Notes: "text",
  DataAdder: "text",
  PreRequirement: "text",
  "PossibleCareerOpportunities.Designation": "text",
  "SourceLinks.Title": "text",
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export { Course };
