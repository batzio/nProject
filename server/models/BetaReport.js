const mongoose = require('mongoose');
const id_validator = require('mongoose-id-validator');
var BetaReportSchema = new mongoose.Schema({

    beta_rpt: {
        type: String
    }

}, { timestamps: true });
BetaReportSchema.plugin(id_validator);

const BetaReport = mongoose.model('betaReport', BetaReportSchema);
module.exports = BetaReport
