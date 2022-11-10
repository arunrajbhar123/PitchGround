const mongoose = require("mongoose");
const directoriesSchema = new mongoose.Schema({
  name: { type: String },
  directoryid: { type: String },
});
const directoriesModel = mongoose.model("directories", directoriesSchema);
module.exports = directoriesModel;
