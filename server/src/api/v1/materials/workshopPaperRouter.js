const Router = require('koa-router');
const StatusCodes = require('http-status-codes');
const { Response, WorkshopMaterialType } = require("../../../types");
const { MaterialService, userService } = require('../../../services');
const { version } = require('../../../config');
const { koaJwt } = require('../../../middlewares');

// Prefix all routes with: /user
const router = new Router({
    prefix : `${version.v1}/workshopPublish`,
});

router.post('/', koaJwt, async (ctx, next) =>
{
    const request = Object.setPrototypeOf(ctx.request.body, WorkshopMaterialType.prototype);

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

    const data = await MaterialService.saveWorkshopFile(request);

    response.success = true;
    response.message = `Research Paper updated successfully.`;
    response.data = {
        user : data,
    };
    ctx.response.status = StatusCodes.OK;
    ctx.body = response;

    next().then();
});

module.exports = router;
