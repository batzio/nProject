const mongoose = require('mongoose')
const id_validator = require ('mongoose-id-validator');

var LecturerSchema = new mongoose.Schema({
    name_lecturer: {
        type: String,
        required: true,
        trim: true
    },
    email_lecturer: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true }
);
LecturerSchema.plugin(id_validator);

const Lecturer = mongoose.model('Lecturer', LecturerSchema);
module.exports = Lecturer
