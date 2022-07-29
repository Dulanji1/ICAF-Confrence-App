const Router = require('koa-router');
const StatusCodes = require('http-status-codes');
const { Response, ResearchMaterialType } = require("../../../types");
const { MaterialService, userService } = require('../../../services');
const { version } = require('../../../config');
const { koaJwt } = require('../../../middlewares');

// Prefix all routes with: /user
const router = new Router({
    prefix : `${version.v1}/research`,
});

router.get('/', koaJwt, async (ctx, next) =>
{
    const response = new Response();

    const data = await MaterialService.getResearchFile();

    response.success = true;
    response.message = `Research Paper updated successfully.`;
    response.data = {
        user : data,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.post('/', koaJwt, async (ctx, next) =>
{
    const request = Object.setPrototypeOf(ctx.request.body, ResearchMaterialType.prototype);

    const response = new Response();

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

    // file get

    let fileName = '';

    try
    {
        if (ctx.request.files.resourceFile.path)
        {
            fileName = ctx.request.files.resourceFile.path.replace(/^.*[\\/]/, '');
        }
    }
    catch (e)
    {
        console.log('no attachments');
    }

    // save file data

    const savedUser = await userService.findByEmail(request.user);

    if (!fileName)
    {
        ctx.response.status = StatusCodes.BAD_REQUEST;

        response.success = false;
        response.message = "File missing";
        response.data = {
            message : "File missing",
        };

        ctx.body = response;
        next().then();

        return;
    }

    request.user = savedUser._id;
    request.fileName = fileName;

    const data = await MaterialService.saveResearchFile(request);

    response.success = true;
    response.message = `Research Paper updated successfully.`;
    response.data = {
        user : data,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.put('/', koaJwt, async (ctx, next) =>
{
    const response = new Response();

    const data = await MaterialService.acceptResearchFile(ctx.request.body.id);

    response.success = true;
    response.message = `Research paper approved`;
    response.data = {
        user : data,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

router.delete('/', koaJwt, async (ctx, next) =>
{
    const response = new Response();

    const data = await MaterialService.rejectResearchFile(ctx.request.query.id);

    response.success = true;
    response.message = `Research paper rejected`;
    response.data = {
        user : data,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

module.exports = router;
