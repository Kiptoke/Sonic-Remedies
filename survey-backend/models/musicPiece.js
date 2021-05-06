const mongoose = require("mongoose");

const musicPieceSchema = mongoose.Schema({
  duration: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  tempo: {
    type: Number,
    required: true,
  },
  improvisation: {
    type: Number,
    required: true,
  },
  consistent_vibe: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Piece", musicPieceSchema);
