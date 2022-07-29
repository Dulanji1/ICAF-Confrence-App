const mongoose = require('mongoose');

const { Schema } = mongoose;

const ConferenceTracksSchema = new Schema({
    description : String,
    isActive    : Boolean,
    isApproved  : Boolean,
}, { collection: 'conferenceTracks' });

module.exports = mongoose.model('conferenceTracks', ConferenceTracksSchema);
