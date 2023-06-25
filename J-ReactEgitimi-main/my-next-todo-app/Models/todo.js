const { default: mongoose, mongo } = require("mongoose");

const todoSchema = new mongoose.Schema({
    work: {type: String, required: true},
    isCompleted: String,
    date: Date
});

export default mongoose.models.Todo || mongoose.model("Todo",todoSchema);