import mongoose from "mongoose";

const audioSchema = mongoose.Schema({
  audio_id: {
    type: Number,
    required: true,
  },
  filepath: {
    type: String,
    required: true,
  },
});

export default mongoose.model("audios", audioSchema);
