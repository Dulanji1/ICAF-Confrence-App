const Router = require('koa-router');
const StatusCodes = require('http-status-codes');
const { Response } = require("../../../types");
const { ConferenceTracksService } = require('../../../services');
const { version } = require('../../../config');
const { koaJwt } = require('../../../middlewares');

// Prefix all routes with: /user
const router = new Router({
    prefix : `${version.v1}/conferenceTracks`,
});

// Routes will go here

router.get('/', async (ctx, next) =>
{
    const response = new Response();

    const result = await ConferenceTracksService.find();

    if (result == null)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot get conference track data";
        response.data = {
            message : '',
        };

        ctx.body = response;
        next().then();

        return;
    }

    response.success = true;
    response.message = `Conference tracks retrieved successfully`;
    response.data = {
        conferenceTracks : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.get('/edit', async (ctx, next) =>
{
    const response = new Response();

    const result = await ConferenceTracksService.findToBeApproved();

    if (!result)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot get conference tracks";
        response.data = {
            message : '',
        };

        ctx.body = response;
        next().then();

        return;
    }

    response.success = true;
    response.message = `Conference tracks retrieved successfully`;
    response.data = {
        conferenceTracks : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

// create registration content method
router.post('/', koaJwt, async (ctx, next) =>
{
    console.log("in api");
    const { description } = ctx.request.body;

    console.log(description);

    const response = new Response();

    if (!description)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "required field(s) missing";
        response.data = {
            message : "required field(s) missing",
        };

        ctx.body = response;
        next().then();

        return;
    }

    const result = await ConferenceTracksService.create(description);

    if (!result)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot create conference tracks";
        response.data = {
            message : result,
        };

        ctx.body = response;
        next().then();

        return;
    }
    response.success = true;
    response.message = `Conference tracks created successfully`;
    response.data = {
        conferenceTracks : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.put('/', koaJwt, async (ctx, next) =>
{
    const { description } = ctx.request.body;

    const response = new Response();

    if (!description)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "required field(s) missing";
        response.data = {
            message : "required field(s) missing",
        };

        ctx.body = response;
        next().then();

        return;
    }

    const result = await ConferenceTracksService.approve(description);

    response.success = true;
    response.message = `Conference Tracks approved successfully`;
    response.data = {
        conferenceTracks : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

module.exports = router;
