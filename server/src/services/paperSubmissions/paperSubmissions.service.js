const { ObjectId } = require('mongoose').Types;
const { PaperSubmissions } = require("../../models");
const PaperSubmissionsType = require('../../types/paperSubmissions/paperSubmission');

const PaperSubmissionsService = {
    find : async () =>
    {
        const data = await PaperSubmissions
            .findOne({ isActive: true, isApproved: true });

        if (!data)
        {
            return '';
        }

        return data;
    },
    findToBeApproved : async () =>
    {
        const data = await PaperSubmissions
            .findOne({ isActive: true, isApproved: false });

        return data;
    },
    findAll : async () =>
    {
        const data = await PaperSubmissions.find({});

        return data;
    },
    findById : async (id) =>
    {
        const data = await PaperSubmissions.find({ _id: ObjectId(id) }).catch((err) =>
        {
            console.log(err);

            return null;
        });

        return data;
    },
    create : async (paperData) =>
    {
        try
        {
            const request = Object.setPrototypeOf(paperData, PaperSubmissionsType.prototype);

            if (!request.isValid())
            {
                return null;
            }

            const homepage = new PaperSubmissions({
                title         : request.title,
                category      : request.category,
                publisherName : request.publisherName,
                description   : request.description,
                publisherDate : request.publisherDate,
                file          : request.file,
                isActive      : true,
                isApproved    : false,
            });

            await PaperSubmissions.remove({ isActive: true, isApproved: false });

            // create user
            const data = await homepage.save();

            return {
                created : true,
                data,
            };
        }
        catch (e)
        {
            console.log(e);
            throw e;
        }
    },
    update : async (paperData) =>
    {
        try
        {
            const request = Object.setPrototypeOf(paperData, PaperSubmissionsType.prototype);

            if (!request.isValid())
            {
                return null;
            }
            // check already exists
            const existingItem = await PaperSubmissionsService.findById(request._id);

            // console.log(`existingItem + ${existingItem}`);
            if (existingItem.length < 1) return null;

            const data = await PaperSubmissions.updateOne(
                { _id: ObjectId(request._id) },
                {
                    $set : {
                        title         : request.title,
                        category      : request.category,
                        publisherName : request.publisherName,
                        description   : request.description,
                        publisherDate : request.publisherDate,
                        file          : request.file,
                    },
                },
            );

            return data;
        }
        catch (e)
        {
            console.log(e);
            throw e;
        }
    },
    approve : async (paperData) =>
    {
        const approveData = await PaperSubmissionsService.findToBeApproved();

        if (!approveData)
        {
            return null;
        }

        // remove old one
        await PaperSubmissions.remove({ isActive: true, isApproved: true });

        // set approved
        const data = await PaperSubmissions
            .updateOne({ isActive: true, isApproved: false }, {
                isApproved    : true,
                title         : paperData.title,
                category      : paperData.category,
                publisherName : paperData.publisherName,
                description   : paperData.description,
                publisherDate : paperData.publisherDate,
                file          : paperData.file,
            }, (err, affected, resp) =>
            {
                console.log(resp);
            });

        return data;
    },
};

module.exports = PaperSubmissionsService;
