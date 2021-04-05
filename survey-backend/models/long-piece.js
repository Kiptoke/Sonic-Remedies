const mongoose = require('mongoose')

const longPieceSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('LongPiece', longPieceSchema)
