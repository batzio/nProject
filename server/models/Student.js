const mongoose = require('mongoose');
const id_validator = require('mongoose-id-validator');
var StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    id: {
        type: String,
        required: true,
        trim: true
    }


    // lecturers_arr: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Lecturer'
    // }],

}, { timestamps: true });
StudentSchema.plugin(id_validator);

const Student = mongoose.model('student', StudentSchema);
module.exports = Student