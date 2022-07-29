const { ResearchMaterialSchema, WorkshopMaterialSchema } = require("../../models");

const MaterialService = {
    getResearchFile : async () =>
    {
        const data = await ResearchMaterialSchema.find({ isActive: true, isApproved: false });

        return data;
    },
    saveResearchFile : async (materialObj) =>
    {
        const material = new ResearchMaterialSchema({
            category      : materialObj.category,
            title         : materialObj.title,
            publisherName : materialObj.publisherName,
            description   : materialObj.description,
            publishDate   : materialObj.publishDate,
            isActive      : true,
            isApproved    : false,
            fileName      : materialObj.fileName,
            user          : materialObj.user,
        });

        const data = await material.save();

        return data;
    },
    acceptResearchFile : async (id) =>
    {
        await ResearchMaterialSchema.updateOne({ _id: id }, {
            isActive   : true,
            isApproved : true,
        }, (err, affected, resp) =>
        {
            console.log(resp);
        });
    },
    rejectResearchFile : async (id) =>
    {
        await ResearchMaterialSchema.updateOne({ _id: id }, {
            isActive   : false,
            isApproved : false,
        }, (err, affected, resp) =>
        {
            console.log(resp);
        });
    },
    saveWorkshopFile : async (materialObj) =>
    {
        const material = new WorkshopMaterialSchema({
            title         : materialObj.title,
            publisherName : materialObj.publisherName,
            description   : materialObj.description,
            publishDate   : materialObj.publishDate,
            isActive      : true,
            isApproved    : false,
            fileName      : materialObj.fileName,
            user          : materialObj.user,
        });

        const data = await material.save();

        return data;
    },
};

module.exports = MaterialService;
