const Router = require('koa-router');
const StatusCodes = require('http-status-codes');
const { Response, PaperSubmissions } = require("../../../types");
const { PaperSubmissionsService } = require('../../../services');
const { version } = require('../../../config');

// Prefix all routes with: /user
const router = new Router({
    prefix : `${version.v1}/paperSubmissions`,
});

// Routes will go here

// create paper submission method
router.post('/', async (ctx, next) =>
{
    const request = Object.setPrototypeOf(ctx.request.body, PaperSubmissions.prototype);

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
        response.message = "Paper title is missing";
        response.data = {
            message : "Paper title is missing",
        };

        ctx.body = response;
        next().then();

        return;
    }
    if (!request.category)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Paper category is missing";
        response.data = {
            message : "Paper category is missing",
        };

        ctx.body = response;
        next().then();

        return;
    }
    if (!request.description)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Paper description are missing";
        response.data = {
            message : "Paper description are missing",
        };

        ctx.body = response;
        next().then();

        return;
    }

    const result = await PaperSubmissionsService.create(request);

    if (!result)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot create paper";
        response.data = {
            message : result,
        };

        ctx.body = response;
        next().then();

        return;
    }
    response.success = true;
    response.message = `Paper created successfully`;
    response.data = {
        paperSubmissionData : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.get('/', async (ctx, next) =>
{
    const response = new Response();

    const result = await PaperSubmissionsService.findAll();

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
    response.message = `Paper data retrived successfully`;
    response.data = {
        PaperData : result,
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

    const result = await PaperSubmissionsService.findById(params.id);

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
    response.message = `Paper data retrived successfully`;
    response.data = {
        PaperData : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.put('/', async (ctx, next) =>
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
    if (!params.title)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Paper title is missing";
        response.data = {
            message : "Paper title is missing",
        };

        ctx.body = response;
        next().then();

        return;
    }
    if (!params.category)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Paper category is missing";
        response.data = {
            message : "Paper category is missing",
        };

        ctx.body = response;
        next().then();

        return;
    }
    if (!params.description)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Paper description are missing";
        response.data = {
            message : "Paper description are missing",
        };

        ctx.body = response;
        next().then();

        return;
    }

    const data = await PaperSubmissionsService.update(params);

    response.success = true;
    response.message = `Paper data updated successfully.`;
    response.data = {
        paperData : data,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

module.exports = router;
