const mongoose = require("mongoose");
const { Program } = require("./models/program");
const { FieldOfStudy } = require("./models/fieldOfStudy");
const { IndirectPartner } = require("./models/indirectPartner");
const { Intake } = require("./models/intake");
const { Language } = require("./models/language");
const { ProgramType } = require("./models/programType");
const { Score } = require("./models/score");

// Replace 'mydatabase' with your actual database name
const mongoDB = "mongodb://127.0.0.1/root-on-data-mgmt";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
    console.log("Successfully connected to MongoDB.");
});

const columnsTitle = [
    {
        title: "Colleges/Universities",
        attribute: "InstituteName",
        slug: "colleges-universities",
    },
    {
        title: "Field of Study",
        attribute: "FieldOfStudy",
        slug: "field-of-study",
    },
    { title: "Language", attribute: "Language", slug: "language" },
    { title: "Program Type", attribute: "ProgramType", slug: "program-type" },
    { title: "Program Level", attribute: "Level", slug: "program-level" },
    {
        title: "Institute Category",
        attribute: "InstituteCategory",
        slug: "institute-category",
    },
    {
        title: "Indirect Partner",
        attribute: "IndirectPartner",
        slug: "indirect-partner",
    },
    { title: "Country", attribute: "Country", slug: "country" },
    {
        title: "Province and City",
        attribute: "Province",
        slug: "province-and-city",
    },
    { title: "PR Chances", attribute: "PRChances", slug: "pr-chances" },
    {
        title: "Length (In Years/In Months)",
        attribute: "Length",
        slug: "length-in-years-in-months",
    },
    { title: "Year", attribute: "Year", slug: "year" },
    { title: "Status", attribute: "Status", slug: "status" },
    {
        title: "Previous Education",
        attribute: "PreviousEducation",
        slug: "previous-education",
    },
    {
        title: "Prerequisites Requirement",
        attribute: "PreRequirement",
        slug: "prerequisites-requirement",
    },
    {
        title: "Work Experience",
        attribute: "WorkExperiences",
        slug: "work-experience",
    },
    {
        title: "Government body for Trade License or Certifications",
        attribute: "TradeLicense",
        slug: "government-body-for-trade-license-or-certifications",
    },
    { title: "Intake", attribute: "Intake", slug: "intake" },
];

const dynamicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    values: { type: [String], default: [] },
});

// Create a model from the schema
const DynamicModel = mongoose.model("EditableEntity", dynamicSchema);

async function transformAndPopulateData() {
    try {
        const programs = await Program.find({});
        const editableEntities = [];
        columnsTitle.map((title) => {
            const editableEntity = {
                title: title.attribute,
                values: [],
            };

            programs.map((program) => {
                const attributeValue = program[title.attribute];
                if (
                    attributeValue &&
                    !editableEntity.values.includes(attributeValue)
                ) {
                    editableEntity.values.push(
                        typeof attributeValue === "string"
                            ? attributeValue
                            : JSON.stringify(attributeValue)
                    );
                }
            });
            editableEntities.push(editableEntity);
        });
        DynamicModel.insertMany(editableEntities);
        console.log("Data transformation and insertion complete.");
    } catch (error) {
        console.error("Error during data transformation and insertion:", error);
    }
}

transformAndPopulateData();
