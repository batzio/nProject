const mongoose = require('mongoose');
const id_validator = require('mongoose-id-validator');
var SubmissionReportSchema = new mongoose.Schema({

    id_project: {
        type: String,
        // required: true,
        // trim: true
    },
    prop_rpt_sub:{
        type: String,
    },

    alfa_rpt_sub: {
        type: String,
        // required: true,
        // trim: true
    },
    beta_rpt_sub:{
        type: String
    },
    final_rpt_grd: {
        type: String,
        // required: true,
        // trim: true
    },

}, { timestamps: true });
SubmissionReportSchema.plugin(id_validator);

const SubRpt = mongoose.model('subRpt', SubmissionReportSchema);
module.exports = SubRpt
