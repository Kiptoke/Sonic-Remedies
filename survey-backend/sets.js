import mongoose from "mongoose";

const setSchema = mongoose.Schema({
  set_id: {
    type: Number,
    required: true,
    unique: true,
  },
  questions: {
    type: [Number],
    required: true,
  },
  audios: {
    type: [Number],
    required: true,
  },
  switch: {
    type: [Number],
    required: true,
  },
});

export default mongoose.model("sets", setSchema);
