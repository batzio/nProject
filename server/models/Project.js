const mongoose = require('mongoose');
const id_validator = require('mongoose-id-validator');
var ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    subject: {
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
        trim: true,
        enum: ['פתוח', 'סגור'] // Replace with your desired options
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
    }


}, { timestamps: true });
ProjectSchema.plugin(id_validator);

const Project = mongoose.model('project', ProjectSchema);
module.exports = Project