const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
  name: String,
  location: String,
  crops: [String],
});

module.exports = mongoose.model("Farmer", farmerSchema);
