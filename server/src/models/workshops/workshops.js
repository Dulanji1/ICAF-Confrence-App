const mongoose = require('mongoose');

const { Schema } = mongoose;

const WorkshopsConfigSchema = new Schema({
    topic       : String,
    description : String,
    speakers    : [ {
        name         : String,
        occupation   : String,
        ProfileImage : String,
    } ],
    isActive   : Boolean,
    isApproved : Boolean,
}, { collection: 'workshopsConfig' });

module.exports = mongoose.model('workshopsConfig', WorkshopsConfigSchema);
