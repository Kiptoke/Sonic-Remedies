const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  input_type: {
    type: String,
    required: true,
  },
  options: [String],
  config: Object,
});

module.exports = mongoose.model("Question", questionSchema);
