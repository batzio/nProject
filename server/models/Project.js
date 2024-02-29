const mongoose = require('mongoose');
const id_validator = require('mongoose-id-validator');
var ProjectSchema = new mongoose.Schema({
    name_english: {
        type: String,
        required: true,
        trim: true
    },

    name_hebrew: {
        type: String,
        required: true,
        trim: true
    },

    details: {
        type: String,
        required: true,
        trim: true
    },

    project_type: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: String,
        required: true,
        trim: true
    },

    offer: {
        type: String,
        required: true,
        trim: true
    },

    add_time: {
        type: String,
        required: true,
        trim: true
    },

    // add_time: {
    //     type: Date,
    //     required: true,
    //     trim: true
    // },

    update_time: {
        type: String,
        // required: true,
        trim: true
    },

    single_or_couple: {
        type: String,
        required: true,
        trim: true
    },

    external_factor: {
        type: String,
        required: true,
        trim: true
    },

    external_party_email: {
        type: String,
        required: true,
        trim: true
    },

    mod_id: {
        type: String
        // required: true,
        // trim: true
    },

    // grades1: [{
    //     id_judge1: {
    //         type: String,
    //         // required: true,
    //         // trim: true
    //     },
    //     alfa_rpt_grd1: {
    //         type: Number,
    //         // required: true,
    //         // trim: true
    //     },
    //     final_rpt_grd1: {
    //         type: Number,
    //         // required: true,
    //         // trim: true
    //     },
    //     final_grd_pjt1: {
    //         type: Number,
    //         // required: true,
    //         // trim: true,
    //     },
    // }],

    // grades2: [{
    //     id_pjt_judge2: {
    //         type: String,
    //         // required: true,
    //         // trim: true
    //     },
    //     alfa_rpt_grd2: {
    //         type: Number,
    //         // required: true,
    //         // trim: true
    //     },
    //     final_rpt_grd2: {
    //         type: Number,
    //         // required: true,
    //         // trim: true
    //     },
    //     final_grd_pjt2: {
    //         type: Number,
    //         // required: true,
    //         // trim: true,
    //     },
    // }],

    // grades3: [{
    //     id_pjt_judge3: {
    //         type: String,
    //         // required: true,
    //         // trim: true
    //     },
    //     alfa_rpt_grd3: {
    //         type: Number,
    //         // required: true,
    //         // trim: true
    //     },
    //     final_rpt_grd3: {
    //         type: Number,
    //         // required: true,
    //         // trim: true
    //     },
    //     final_grd_pjt3: {
    //         type: Number,
    //         // required: true,
    //         // trim: true,
    //     },
    // }],

    //להוסיף תז של סטודנט/ים - תלוי אם יחיד או זוג

    Grades_arr: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'grades'
    }],

    Judges_arr: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'moderator'
    }],

    SubRpt:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'submissionReport'
    }]


}, { timestamps: true });
ProjectSchema.plugin(id_validator);

const Project = mongoose.model('project', ProjectSchema);
module.exports = Project