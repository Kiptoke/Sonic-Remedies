import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  question_id: {
    type: String,
    required: true,
    unique: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  input_type: {
    type: String,
    required: true,
  },
  options: [String],
});

export default mongoose.model("questions", questionSchema);
