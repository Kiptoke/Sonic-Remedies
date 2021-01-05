import mongoose from 'mongoose';

const setSchema = mongoose.Schema({
    set_number: {
        type: Number,
        required: true,
        unique: true
    },
    num_questions: {
        type: Number,
        required: true
    },
    question_ids: {
        type: [ String ],
        required: true
    }
});

export default mongoose.model('sets', setSchema);