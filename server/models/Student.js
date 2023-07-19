const mongoose = require('mongoose');
const id_validator = require('mongoose-id-validator');
var StudentSchema = new mongoose.Schema({
    sdt_username: {
        type: String,
        required: true,
        trim: true
    },

    sdt_password: {
        type: String,
        required: true,
        trim: true
    },

    sdt_firstName: {
        type: String,
        required: true,
        trim: true
    },

    sdt_lastName: {
        type: String,
        required: true,
        trim: true
    },

    sdt_ID: {
        type: String,
        required: true,
        trim: true
    },

    // sdt_age:{
    //     type: Number,
    //     required: true,
    //     trim: true
    // },

    sdt_email: {
        type: String,
        required: true,
        trim: true,
    }

}, { timestamps: true });
StudentSchema.plugin(id_validator);

const Student = mongoose.model('student', StudentSchema);
module.exports = Student
