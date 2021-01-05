import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
    question_id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    input_type: {
        type: Number,
        required: true
    },
    options: [ String ]
});

export default mongoose.model('questions', questionSchema);