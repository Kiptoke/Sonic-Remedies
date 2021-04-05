const mongoose = require('mongoose')

const shortPieceSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  filepath: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ShortPiece', shortPieceSchema)
