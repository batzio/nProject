const mongoose = require('mongoose')
const id_validator = require('mongoose-id-validator');

var ModeratorSchema = new mongoose.Schema({
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

    mod_firstName: {
        type: String,
        trim: true
    },

    mod_lastName: {
        type: String,
        required: true,
        trim: true
    },

    mod_ID: {
        type: String,
        required: true,
        trim: true
    },

    mod_email: {
        type: String,
        required: true,
        trim: true
    },

    // grades1: [{
    //     id_pjt1: {
    //         type: String,
    //         required: true,
    //         trim: true
    //     },
    //     alfa_rpt_grd1: {
    //         type: Number,
    //         required: true,
    //         trim: true
    //     },
    //     final_rpt_grd1: {
    //         type: Number,
    //         required: true,
    //         trim: true
    //     },
    //     final_grd_pjt1: {
    //         type: Number,
    //         required: true,
    //         trim: true,
    //     },
    // }],

    // grades2: [{
    //     id_pjt2: {
    //         type: String,
    //         required: true,
    //         trim: true
    //     },
    //     alfa_rpt_grd2: {
    //         type: Number,
    //         required: true,
    //         trim: true
    //     },
    //     final_rpt_grd2: {
    //         type: Number,
    //         required: true,
    //         trim: true
    //     },
    //     final_grd_pjt2: {
    //         type: Number,
    //         required: true,
    //         trim: true,
    //     },
    // }],

    // grades3: [{
    //     id_pjt3: {
    //         type: String,
    //         required: true,
    //         trim: true
    //     },
    //     alfa_rpt_grd3: {
    //         type: Number,
    //         required: true,
    //         trim: true
    //     },
    //     final_rpt_grd3: {
    //         type: Number,
    //         required: true,
    //         trim: true
    //     },
    //     final_grd_pjt3: {
    //         type: Number,
    //         required: true,
    //         trim: true,
    //     },
    // }],
    // pjt1_grd: {
    //     type: Number,
    //     required: true,
    //     trim: true
    // },

    // pjt2_grd: {
    //     type: Number,
    //     required: true,
    //     trim: true
    // },

    // pjt3_grd: {
    //     type: Number,
    //     required: true,
    //     trim: true
    // },

    //List of projects the moderator in
    projects_arr: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
    }],
    
    judge_project_arr: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
    }]

    

}, { timestamps: true }
);
ModeratorSchema.plugin(id_validator);

const Moderator = mongoose.model('Moderator', ModeratorSchema);
module.exports = Moderator
