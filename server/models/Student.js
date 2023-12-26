const mongoose = require('mongoose');
const id_validator = require('mongoose-id-validator');
var StudentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },

    password: {
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

    sdt_email: {
        type: String,
        required: true,
        trim: true,
    },

    id_pjt: {
        type: String,
        trim: true
    },

    // alfa_rpt_grd: {
    //     type: Number,
    //     required: true,
    //     trim: true,
    // },

    // beta_rpt_grd: {
    //     type: Number,
    //     required: true,
    //     trim: true,
    // },

    // final_rpt_grd: {
    //     type: Number,
    //     required: true,
    //     trim: true,
    // },

    // final_grd_pjt: {
    //     type: Number,
    //     required: true,
    //     trim: true,
    // },

    grades: [{
        alfa_rpt_grd: {
            type: Number,
            required: true,
            trim: true
        },
        final_rpt_grd: {
            type: Number,
            required: true,
            trim: true
        },
        final_grd_pjt: {
            type: Number,
            required: true,
            trim: true,
        },
    }],


}, { timestamps: true });
StudentSchema.plugin(id_validator);

const Student = mongoose.model('student', StudentSchema);
module.exports = Student
