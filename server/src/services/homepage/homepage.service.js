const { ObjectId } = require('mongoose').Types;
const { HomepageConfigSchema } = require("../../models");
const HomepageConfigType = require('../../types/homepageConfig/homepageConfig');

const HomepageService = {
    find : async () =>
    {
        const data = await HomepageConfigSchema
            .findOne({ isActive: true, isApproved: true });

        if (!data)
        {
            return '';
        }

        return data;
    },
    findAll : async () =>
    {
        const data = await HomepageConfigSchema.find({});

        return data;
    },
    findById : async (id) =>
    {
        const data = await HomepageConfigSchema.find({ _id: ObjectId(id) }).catch((err) =>
        {
            console.log(err);

            return null;
        });

        return data;
    },
    findToBeApproved : async () =>
    {
        const data = await HomepageConfigSchema
            .findOne({ isActive: true, isApproved: false });

        return data;
    },
    create : async (homepageData) =>
    {
        try
        {
            const request = Object.setPrototypeOf(homepageData, HomepageConfigType.prototype);

            if (!request.isValid())
            {
                return null;
            }

            const homepage = new HomepageConfigSchema({
                title            : request.title,
                subTitle         : request.subTitle,
                subTitleSuffix   : request.subTitleSuffix,
                aboutConference  : request.aboutConference,
                keynoteSpeakers  : request.keynoteSpeakers,
                guestSpeakers    : request.guestSpeakers,
                conferenceTracks : request.conferenceTracks,
                importantDates   : request.importantDates,
                isActive         : true,
                isApproved       : false,
            });

            // remove old homepage data
            await HomepageConfigSchema.remove({ isActive: true, isApproved: false });

            // create homepage
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
    update : async (homepageData) =>
    {
        try
        {
            const request = Object.setPrototypeOf(homepageData, HomepageConfigType.prototype);

            if (!request.isValid())
            {
                return null;
            }
            // check already exists
            const existingItem = await HomepageService.findById(request._id);

            // console.log(`existingItem + ${existingItem}`);
            if (existingItem.length < 1) return null;

            const data = await HomepageConfigSchema.updateOne(
                { _id: ObjectId(request._id) },
                {
                    $set : {
                        title           : request.title,
                        subTitle        : request.subTitle,
                        subTitleSuffix  : request.subTitleSuffix,
                        aboutConference : request.aboutConference,
                        keynoteSpeakers : request.keynoteSpeakers,
                        guestSpeakers   : request.guestSpeakers,
                        importantDates  : request.importantDates,
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
    approve : async (homepageData) =>
    {
        const approveData = await HomepageService.findToBeApproved();

        if (!approveData)
        {
            return null;
        }

        // remove old one
        await HomepageConfigSchema.remove({ isActive: true, isApproved: true });

        // set approved
        const data = await HomepageConfigSchema
            .updateOne({ isActive: true, isApproved: false }, {
                isApproved      : true,
                title           : homepageData.title,
                subTitle        : homepageData.subTitle,
                subTitleSuffix  : homepageData.subTitleSuffix,
                aboutConference : homepageData.aboutConference,
                keynoteSpeakers : homepageData.keynoteSpeakers,
                guestSpeakers   : homepageData.guestSpeakers,
                importantDates  : homepageData.importantDates,
            }, (err, affected, resp) =>
            {
                console.log(resp);
            });

        return data;
    },
};

module.exports = HomepageService;
