const mongoose = require('mongoose')

const setOrderSchema = new mongoose.Schema({
    sets: {
        type: [String],
        required: true,
    },
})

module.exports = mongoose.model('SetOrder', setOrderSchema)