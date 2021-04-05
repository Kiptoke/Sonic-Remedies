const mongoose = require('mongoose')

const setSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    questions: {
        type: [String],
        required: true,
    },
    music: {
        type: Boolean
    }
})

module.exports = mongoose.model('Set', setSchema)