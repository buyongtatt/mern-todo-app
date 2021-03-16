import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Todo from "./mongoData.js";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.ATLAS_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB connected");
});

app.get("/todos", (req, res) => {
  Todo.find().then((todo) => res.json(todo));
});

app.post("/todos", (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  newTodo.save().then((todo) => res.json(todo));
});

app.delete("/todos/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id).then(() => res.json({ remove: true }));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
