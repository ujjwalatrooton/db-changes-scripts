const mongoose = require("mongoose");

const LicensesCertificationsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuingAuthority: { type: String, required: true },
});

const LicensesCertifications =
    mongoose.models.LicensesCertifications ||
    mongoose.model("LicensesCertifications", LicensesCertificationsSchema);

export { LicensesCertifications };
