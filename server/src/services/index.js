const dbContext = require('./database/applicationDbContext');
const applicationDataSeeder = require('./database/applicationDataSeeder');
const userService = require('./user/user.service');
const exceptionService = require('./exception/exception.service');
const dataManagerService = require('./system/dataManager/dataManager.service');
const RoleService = require('./userRole/userRole.service');
const TokenService = require('./user/token.service');
const mailService = require('./system/mailer/nodeMailer.service');
const emailNotificationService = require('./system/notification/emailNotification.service');
const HomepageService = require('./homepage/homepage.service');
const PaperSubmissionsService = require('./paperSubmissions/paperSubmissions.service');
const RegistrationService = require('./registration/registration.service');
const ConferenceTracksService = require('./conferenceTracks/conferenceTracks.service');
const WorkshopsService = require('./workshops/workshops.service');
const WorkshopCallsService = require('./workshops/workshopCalls.service');
const MaterialService = require('./materials/material.service');

module.exports = {
    dbContext,
    applicationDataSeeder,
    userService,
    exceptionService,
    dataManagerService,
    RoleService,
    TokenService,
    mailService,
    emailNotificationService,
    HomepageService,
    PaperSubmissionsService,
    RegistrationService,
    ConferenceTracksService,
    WorkshopsService,
    WorkshopCallsService,
    MaterialService,
};
