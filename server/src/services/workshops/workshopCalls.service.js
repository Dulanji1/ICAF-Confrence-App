const { ObjectId } = require('mongoose').Types;
const { WorkshopCallsConfig } = require("../../models");

const WorkshopCallsService = {
    find : async () =>
    {
        const data = await WorkshopCallsConfig
            .findOne({ isActive: true, isApproved: true });

        if (!data)
        {
            return '';
        }

        return data;
    },
    findToBeApproved : async () =>
    {
        const data = await WorkshopCallsConfig
            .findOne({ isActive: true, isApproved: false });

        return data;
    },
    findAll : async () =>
    {
        const data = await WorkshopCallsConfig.find({});

        return data;
    },
    findById : async (id) =>
    {
        const data = await WorkshopCallsConfig.find({ _id: ObjectId(id) }).catch((err) =>
        {
            console.log(err);

            return null;
        });

        return data;
    },
    create : async (WorkshopCallsData) =>
    {
        try
        {
            if (!WorkshopCallsData)
            {
                return null;
            }

            const workshopCall = new WorkshopCallsConfig({
                description : WorkshopCallsData,
                isActive    : true,
                isApproved  : false,
            });

            await WorkshopCallsConfig.remove({ isActive: true, isApproved: false });

            // create user
            const data = await workshopCall.save();

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
    update : async (WorkshopCallsData) =>
    {
        try
        {
            if (!WorkshopCallsData)
            {
                return null;
            }
            // check already exists
            const existingItem = await WorkshopCallsService.findById(WorkshopCallsData._id);

            // console.log(`existingItem + ${existingItem}`);
            if (existingItem.length < 1) return null;

            const data = await WorkshopCallsConfig.updateOne(
                { _id: ObjectId(WorkshopCallsData._id) },
                {
                    $set : {
                        description : WorkshopCallsData.description,
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
    approve : async (description) =>
    {
        const approveData = await WorkshopCallsService.findToBeApproved();

        if (!approveData)
        {
            return null;
        }

        // remove old one
        await WorkshopCallsConfig.remove({ isActive: true, isApproved: true });

        // set approved
        const data = await WorkshopCallsConfig
            .updateOne({ isActive: true, isApproved: false }, {
                isApproved : true,
                description,
            }, (err, affected, resp) =>
            {
                console.log(resp);
            });

        return data;
    },
};

module.exports = WorkshopCallsService;
