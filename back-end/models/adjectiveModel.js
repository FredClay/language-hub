const mongoose = require('mongoose');

const { Schema } = mongoose;

// Vocab Model
const VocabSchema = new Schema({
    english: {
        type: String,
        require: true,
    },
    translation: {
        type: String,
        require: true,
    },
    flags: {
        type: Number,
        default: 0,
    }
});

const Adjective = mongoose.model('adjectives', VocabSchema);

module.exports = {Adjective};
