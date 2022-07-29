const combineRouters = require('koa-combine-routers');

const authRouter = require('./v1/auth/authRouter');
const applicationRouter = require('./application/applicationRouter');
const userRouter = require('./v1/user/userRouter');
const roleRouter = require('./v1/role/roleRouter');
const homepageRouter = require('./v1/homepage/homepageRouter');
const registrationRouter = require('./v1/registration/registrationRouter');
// const workshopRouter = require('./v1/workshops/workshopRouter');
const workshopCallRouter = require('./v1/workshops/workshopCallRouter');
const conferenceTracksRouter = require('./v1/conferenceTracks/conferenceTracksRouter');
const researchPaperRouter = require('./v1/materials/reseachPaperRouter');
const workshopRouter = require('./v1/materials/workshopPaperRouter');

const router = combineRouters(
    applicationRouter,
    authRouter,
    userRouter,
    roleRouter,
    homepageRouter,
    registrationRouter,
    // workshopRouter,
    workshopCallRouter,
    conferenceTracksRouter,
    researchPaperRouter,
    workshopRouter,
);

module.exports = router;
