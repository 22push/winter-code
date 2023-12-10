const mongoose = require('mongoose');
// const User = require('./userModel');

// const userId = {
//     User.forEach(element => {

//     });
// }

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A medicine must have a name!'],
        unique: true,
        trim: true
    },
    dosage: {
        type: String,
        required: [true, 'A medicine must have a Dose Size!']
    },
    summary: {
        type: String,
        trim: true,
        required: [true, 'A medication must have a Description Summary!']
    },
    startedAt: {
        type: String,
        default: Date.now()
    },
    instruction: {
        type: String,
        required: [true, 'A medicine must have a instruction!']
    },
    frequency: {
        type: String,
        required: [true, 'A medicine must have a Frequency']
    },

    userId: {
        type: String,
        required: true
    },
    time: {
        type: String,
        // default: Date.now().time().toString()
    },
    notification: {
        type: Boolean,
        required: true
    }
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
