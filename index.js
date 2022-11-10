const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const directoryRoute = require("./routes/directory.route");
const todoitemRoute = require("./routes/todoitems.route");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/directory", directoryRoute);
app.use("/todo-item", todoitemRoute);

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("database connected");
  } catch {
    console.log("database not connected");
  }
  console.log("server is running on ", process.env.PORT);
});
