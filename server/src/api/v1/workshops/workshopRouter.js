const Router = require('koa-router');
const StatusCodes = require('http-status-codes');
const { Response } = require("../../../types");
const { WorkshopsService } = require('../../../services');
const { version } = require('../../../config');
const { koaJwt } = require('../../../middlewares');

// Prefix all routes with: /user
const router = new Router({
    prefix : `${version.v1}/workshops`,
});
// Routes will go here

// workshop call method
router.post('/', async (ctx, next) =>
{
    const params = ctx.request.body;

    const response = new Response();

    // check data validation
    if (!params)
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
    if (!params.topic)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Workshop topic is missing";
        response.data = {
            message : "Workshop topic is missing",
        };

        ctx.body = response;
        next().then();

        return;
    }
    if (!params.description)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Workshop description is missing";
        response.data = {
            message : "Workshop description is missing",
        };

        ctx.body = response;
        next().then();

        return;
    }
    if (!params.speakers)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "Workshop speakers are missing";
        response.data = {
            message : "Workshop speakers are missing",
        };

        ctx.body = response;
        next().then();

        return;
    }

    const result = await WorkshopsService.create(params);

    if (!result)
    {
        ctx.response.status = StatusCodes.FORBIDDEN;

        response.success = false;
        response.message = "Cannot create workshop";
        response.data = {
            message : result,
        };

        ctx.body = response;
        next().then();

        return;
    }
    response.success = true;
    response.message = `Workshop created successfully`;
    response.data = {
        Workshop : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.get('/', async (ctx, next) =>
{
    const response = new Response();

    const result = await WorkshopsService.findAll();

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
    response.message = `Workshop data retrived successfully`;
    response.data = {
        Workshop : result,
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

    const result = await WorkshopsService.findById(params.id);

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
    response.message = `Workshop data retrived successfully`;
    response.data = {
        Workshop : result,
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

    if (!params)
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

    const data = await WorkshopsService.update(params);

    response.success = true;
    response.message = `Workshop data updated successfully.`;
    response.data = {
        Workshop : data,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});
router.put('/', koaJwt, async (ctx, next) =>
{
    const data = ctx.request.body;

    const response = new Response();

    if (!data)
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

    const result = await WorkshopsService.approve(data);

    response.success = true;
    response.message = `workshop approved successfully`;
    response.data = {
        data : result,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

module.exports = router;
