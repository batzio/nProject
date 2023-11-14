const mongoose = require('mongoose');
const id_validator = require('mongoose-id-validator');
var FinalReportSchema = new mongoose.Schema({

    final_rpt: {
        type: String
    }

}, { timestamps: true });
FinalReportSchema.plugin(id_validator);

const FinalReport = mongoose.model('finalReport', FinalReportSchema);
module.exports = FinalReport
