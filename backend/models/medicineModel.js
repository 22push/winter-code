const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A medicine must have a name!'],
        unique: true,
        trim: true
    },
    dosage: {
        type: Number,
        required: [true, 'A medicine must have a Dose Size!']
    },
    duration: {
        type: Number,
        required: [true, 'A medicine must have a duration!']
    },
    frequency: {
        type: Number,
        required: [true, 'A medicine must have a Frequency']
    },
    summary: {
        type: String,
        trim: true,
        required: [true, 'A medication must have a Description Summary!']
    },
    startedAt: {
        type: Date,
        default: Date.now()
    }

});

const Medicine = mongoose.model('Medicine',medicineSchema);

module.exports = Medicine;