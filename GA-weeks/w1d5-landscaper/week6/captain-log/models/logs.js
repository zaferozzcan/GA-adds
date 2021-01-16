const { localsName } = require('ejs');
const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true }
}, { timestamps: true });

const Log = mongoose.model('Logs', logSchema);

module.exports = Log;