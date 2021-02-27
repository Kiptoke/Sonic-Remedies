const mongoose = require('mongoose')

const setSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    questions: {
        type: [String],
        required: true,
    }
})

module.exports = mongoose.model('Set', setSchema)