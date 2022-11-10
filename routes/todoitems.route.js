const express = require("express");
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
  const { directoryid, id } = req.body;
  const update = await todoModel.updateOne(
    { _id: id },
    { $set: { directoryid: directoryid } }
  );
  res.send({ message: "success" });
});

todoitemRoute.post("/list", async (req, res) => {
  const { pageNumber } = req.body;
  const data = await todoModel
    .find()
    .sort({ _id: 1 })
    .skip(pageNumber > 0 ? (pageNumber - 1) * 5 : 0)
    .limit(5);

  res.send({ message: "success", data });
});
todoitemRoute.post("/list/status-done", async (req, res) => {
  const { pageNumber } = req.body;
  const data = await todoModel
    .find({ status: true })
    .sort({ _id: 1 })
    .skip(pageNumber > 0 ? (pageNumber - 1) * 5 : 0)
    .limit(5);

  res.send({ message: "success", data });
});
todoitemRoute.post("/list/status-not-done", async (req, res) => {
  const { pageNumber } = req.body;
  const data = await todoModel
    .find({ status: false })
    .sort({ _id: 1 })
    .skip(pageNumber > 0 ? (pageNumber - 1) * 5 : 0)
    .limit(5);

  res.send({ message: "success", data });
});
module.exports = todoitemRoute;
