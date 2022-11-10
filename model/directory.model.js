const mongoose = require("mongoose");
const directorySchema = new mongoose.Schema({
  name: { type: String },
  todoid: { type: String },
});
const directoryModel = mongoose.model("directory", directorySchema);
module.exports = directoryModel;
