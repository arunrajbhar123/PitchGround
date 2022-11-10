const express = require("express");
const directoriesModel = require("../model/directories.model");
const todoModel = require("../model/todo.model");
const todoitemRoute = express.Router();

todoitemRoute.post("/create", async (req, res) => {
  const data = req.body;
  const save = new todoModel(data);
  save.save();
  res.send({ message: "success", data: save });
});

todoitemRoute.post("/mark-as-done", async (req, res) => {
  const { id } = req.body;

  const update = await todoModel.updateOne(
    { _id: id },
    { $set: { status: true } }
  );

  res.send({ message: "update success" });
});

todoitemRoute.post("/mark-as-not-done", async (req, res) => {
  const { id } = req.body;

  const update = await todoModel.updateOne(
    { _id: id },
    { $set: { status: false } }
  );

  res.send({ message: "update success" });
});

todoitemRoute.post("/move-to-directory", async (req, res) => {
  res.send({ message: "directory not exist" });
});

todoitemRoute.post("/list", async (req, res) => {
  
  res.send({ message: "directory not exist" });
});
module.exports = todoitemRoute;
