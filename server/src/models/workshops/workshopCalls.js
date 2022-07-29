const mongoose = require('mongoose');

const { Schema } = mongoose;

const WorkshopCallsConfigSchema = new Schema({
    description : String,
    isActive    : Boolean,
    isApproved  : Boolean,
}, { collection: 'workshopCallsConfig' });

module.exports = mongoose.model('workshopCallsConfig', WorkshopCallsConfigSchema);
