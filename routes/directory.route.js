const express = require("express");
const directoriesModel = require("../model/directories.model");
const directoryModel = require("../model/directory.model");
const directoryRoute = express.Router();

directoryRoute.post("/list", async (req, res) => {
  const data = await directoriesModel.find({});

  res.send({ message: "success", data });
});

directoryRoute.post("/create", async (req, res) => {
  const { name } = req.body;
  const data = new directoryModel({
    name,
  });
  data.save();
  res.send({ message: "success", data });
});

directoryRoute.post("/remove", async (req, res) => {
  const { id } = req.body;
  const data = await directoryModel.deleteOne({ _id: id });
  console.log(data);
  if (data.deletedCount == 1) {
    res.send({ message: "success" });
  } else {
    res.send({ message: "directory not exist" });
  }
});

module.exports = directoryRoute;
