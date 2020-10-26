const { localsName } = require('ejs');
const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    title: string,
    entry: string,
    shipIsBroken: true
}, { timestamps: true });

const Log = mongoose.model('Logs', logSchema);

module.exports = Log;