const Router = require('koa-router');
const StatusCodes = require('http-status-codes');
const { Response, HomepageConfig } = require("../../../types");
const { HomepageService } = require('../../../services');
const { version } = require('../../../config');
const { koaJwt } = require('../../../middlewares');

// Prefix all routes with: /user
const router = new Router({
    prefix : `${version.v1}/homepage`,
});

// Routes will go here

// user sign in method
router.post('/', async (ctx, next) =>
{
    const request = Object.setPrototypeOf(ctx.request.body, HomepageConfig.prototype);

    const response = new Response();

    // check data validation
    if (!request.isValid())
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
    if (!request.title)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Conference title is missing";
        response.data = {
            message : "Conference title is missing",
        };

        ctx.body = response;
        next().then();

        return;
    }
    if (!request.subTitle)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Conference subtitle is missing";
        response.data = {
            message : "Conference subtitle is missing",
        };

        ctx.body = response;
        next().then();

        return;
    }
    if (!request.aboutConference)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Conference details are missing";
        response.data = {
            message : "Conference details are missing",
        };

        ctx.body = response;
        next().then();

        return;
    }

    const result = await HomepageService.create(request);

    if (!result)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot create homepage";
        response.data = {
            message : result,
        };

        ctx.body = response;
        next().then();

        return;
    }
    response.success = true;
    response.message = `Homepage created successfully`;
    response.data = {
        homepageData : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.get('/', async (ctx, next) =>
{
    const response = new Response();

    const result = await HomepageService.find();

    if (!result)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot list data";
        response.data = {
            message : '',
        };

        ctx.body = response;
        next().then();

        return;
    }

    response.success = true;
    response.message = `Homepage data retrived successfully`;
    response.data = {
        homepageData : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.get('/getById/:id', async (ctx, next) =>
{
    const { params } = ctx;

    console.log(params);

    const response = new Response();

    if (!params.id)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Object id is missing";
        response.data = {
            message : "Object id is missing",
        };

        ctx.body = response;
        next().then();

        return;
    }

    const result = await HomepageService.findById(params.id);

    if (!result)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot list data";
        response.data = {
            message : '',
        };

        ctx.body = response;
        next().then();

        return;
    }

    response.success = true;
    response.message = `Homepage data retrived successfully`;
    response.data = {
        homepageData : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});
router.get('/edit', async (ctx, next) =>
{
    const response = new Response();

    const result = await HomepageService.findToBeApproved();

    if (!result)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot get homepage data";
        response.data = {
            message : '',
        };

        ctx.body = response;
        next().then();

        return;
    }

    response.success = true;
    response.message = `Homepage data retrieved successfully`;
    response.data = {
        homepageData : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.put('/update', async (ctx, next) =>
{
    const response = new Response();

    const params = ctx.request.body;

    console.log(params);

    if (params.length <= 0)
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
    if (!params._id)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Object id is missing";
        response.data = {
            message : "Object id is missing",
        };

        ctx.body = response;
        next().then();

        return;
    }

    const data = await HomepageService.update(params);

    response.success = true;
    response.message = `Homepage data updated successfully.`;
    response.data = {
        homepageData : data,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.put('/', koaJwt, async (ctx, next) =>
{
    console.log("in api");
    const request = Object.setPrototypeOf(ctx.request.body, HomepageConfig.prototype);

    console.log(request);

    const response = new Response();

    if (!request)
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

    const result = await HomepageService.approve(request);

    response.success = true;
    response.message = `Homepage approved successfully`;
    response.data = {
        homepageData : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

module.exports = router;
