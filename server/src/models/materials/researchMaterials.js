const mongoose = require('mongoose');

const { Schema } = mongoose;

const ResearchMaterialSchema = new Schema({
    category      : String,
    title         : String,
    publisherName : String,
    description   : String,
    publishDate   : String,
    isActive      : Boolean,
    isApproved    : Boolean,
    fileName      : '',
    user          : {
        type : Schema.Types.ObjectId,
        ref  : 'user',
    },
}, { collection: 'researchMaterial' });

module.exports = mongoose.model('researchMaterial', ResearchMaterialSchema);
