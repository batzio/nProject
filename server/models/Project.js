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
        // enum: ['פתוח', 'סגור'] // Replace with your desired options
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
    }


}, { timestamps: true });
ProjectSchema.plugin(id_validator);

const Project = mongoose.model('project', ProjectSchema);
module.exports = Project