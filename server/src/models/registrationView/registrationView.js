const mongoose = require('mongoose');

const { Schema } = mongoose;

const RegistrationViewSchema = new Schema({
    description : String,
    isActive    : Boolean,
    isApproved  : Boolean,
}, { collection: 'registrationView' });

module.exports = mongoose.model('registrationView', RegistrationViewSchema);
