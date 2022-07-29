const User = require('./user/user');
const Role = require('./role/role');
const RefreshToken = require('./user/refreshToken');
const Token = require('./token/token');
const HomepageConfigSchema = require('./homepage/homepage');
const PaperSubmissions = require('./paperSubmissions/paperSubmissions');
const RegistrationViewSchema = require('./registrationView/registrationView');
const ConferenceTracksSchema = require('./conferenceTracks/conferenceTracks');
const WorkshopsConfig = require('./workshops/workshops');
const WorkshopCallsConfig = require('./workshops/workshopCalls');
const ResearchMaterialSchema = require('./materials/researchMaterials');
const WorkshopMaterialSchema = require('./materials/workshopMaterials');

module.exports = {
    User,
    Role,
    RefreshToken,
    Token,
    HomepageConfigSchema,
    PaperSubmissions,
    RegistrationViewSchema,
    ConferenceTracksSchema,
    WorkshopsConfig,
    WorkshopCallsConfig,
    ResearchMaterialSchema,
    WorkshopMaterialSchema,
};
