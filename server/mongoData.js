import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: String,
  complete: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Todo", todoSchema);
