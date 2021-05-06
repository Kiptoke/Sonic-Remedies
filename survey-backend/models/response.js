const mongoose = require('mongoose')

const responseSchema = mongoose.Schema({
    musicids: {
        type: [String],
        required: true,
    },
    questionGroups: {
        type: [String],
        required: true,
    },
    questions: {
        type: [String],
        required: true,
    },
    answers: {
        type: [String],
        required: true,
    }
});

module.exports = mongoose.model('Response', responseSchema)