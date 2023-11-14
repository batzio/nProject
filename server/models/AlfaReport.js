const mongoose = require('mongoose');
const id_validator = require('mongoose-id-validator');
var AlfaReportSchema = new mongoose.Schema({

    alfa_rpt: {
        type: String
    }

}, { timestamps: true });
AlfaReportSchema.plugin(id_validator);

const AlfaReport = mongoose.model('alfaReport', AlfaReportSchema);
module.exports = AlfaReport
