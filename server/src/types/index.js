const CredentialType = require('./auth/credential/credentialType');
const AuthenticateUser = require('./auth/authenticateUser/authenticateUser');
const NewUser = require('./auth/newUser/newUser');
const Response = require('./response/response');
const RefreshTokenModel = require('./auth/refreshToken/refreshToken');
const HomepageConfig = require('./homepageConfig/homepageConfig');
const PaperSubmissions = require('./paperSubmissions/paperSubmission');
const ResearchMaterialType = require('./material/researchMaterialType');
const WorkshopMaterialType = require('./material/workshopMaterialType');

module.exports = {
    CredentialType,
    AuthenticateUser,
    NewUser,
    Response,
    RefreshTokenModel,
    HomepageConfig,
    PaperSubmissions,
    ResearchMaterialType,
    WorkshopMaterialType,
};
