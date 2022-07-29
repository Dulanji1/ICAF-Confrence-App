const mongoose = require('mongoose');

const { Schema } = mongoose;

const WorkshopMaterialSchema = new Schema({
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
}, { collection: 'workshopMaterial' });

module.exports = mongoose.model('workshopMaterial', WorkshopMaterialSchema);
