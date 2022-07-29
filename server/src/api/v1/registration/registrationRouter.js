const Router = require('koa-router');
const StatusCodes = require('http-status-codes');
const { Response } = require("../../../types");
const { RegistrationService } = require('../../../services');
const { version } = require('../../../config');
const { koaJwt } = require('../../../middlewares');

// Prefix all routes with: /user
const router = new Router({
    prefix : `${version.v1}/registration`,
});

// Routes will go here

router.get('/', async (ctx, next) =>
{
    const response = new Response();

    const result = await RegistrationService.find();

    if (result == null)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot get registration data";
        response.data = {
            message : '',
        };

        ctx.body = response;
        next().then();

        return;
    }

    response.success = true;
    response.message = `Registration data retrieved successfully`;
    response.data = {
        registrationData : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.get('/edit', async (ctx, next) =>
{
    const response = new Response();

    const result = await RegistrationService.findToBeApproved();

    if (!result)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot get registration data";
        response.data = {
            message : '',
        };

        ctx.body = response;
        next().then();

        return;
    }

    response.success = true;
    response.message = `Registration data retrieved successfully`;
    response.data = {
        registrationData : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

// create registration content method
router.post('/', koaJwt, async (ctx, next) =>
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

    const result = await RegistrationService.create(description);

    if (!result)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot create registration";
        response.data = {
            message : result,
        };

        ctx.body = response;
        next().then();

        return;
    }
    response.success = true;
    response.message = `Registration created successfully`;
    response.data = {
        registrationData : result,
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

    const result = await RegistrationService.approve(description);

    response.success = true;
    response.message = `Registration approved successfully`;
    response.data = {
        registrationData : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

module.exports = router;
