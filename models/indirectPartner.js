const mongoose = require("mongoose");
const indirectPartnerSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
  });
  
  const IndirectPartner =
    mongoose.models.IndirectPartner || mongoose.model("IndirectPartner", indirectPartnerSchema);
  module.exports = { IndirectPartner };