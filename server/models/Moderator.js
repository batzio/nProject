const mongoose = require('mongoose')
const id_validator = require ('mongoose-id-validator');

var ModeratorSchema = new mongoose.Schema({
    mod_username: {
        type: String,
        required: true,
        trim: true
    },

    mod_password: {
        type: String,
        required: true,
        trim: true
    },

    mod_firstName: {
        type: String,
        required: true,
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

    // mod_age:{
    //     type: Number,
    //     required: true,
    //     trim: true
    // },

    mod_email: {
        type: String,
        required: true,
        trim: true,
    },

    mod_isCoordinator: {
        type: Boolean,
        required: true,
        default: false
      }
}, { timestamps: true }
);
ModeratorSchema.plugin(id_validator);

const Moderator = mongoose.model('Moderator', ModeratorSchema);
module.exports = Moderator
