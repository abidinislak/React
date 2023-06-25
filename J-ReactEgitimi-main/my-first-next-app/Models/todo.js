import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    _id: Number,
    work: String,
    isCompleted: Boolean
  });

  
  export default mongoose.models.Todo || mongoose.model("Todo",TodoSchema);