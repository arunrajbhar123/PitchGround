const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  title: { type: String },
  status: { type: Boolean },
  directoryid: { type: String },
});
const todoModel = mongoose.model("todo", todoSchema);
module.exports = todoModel;
