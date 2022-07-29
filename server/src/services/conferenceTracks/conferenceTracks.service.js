const { ConferenceTracksSchema } = require("../../models");

const ConferenceTracksService = {
    find : async () =>
    {
        const data = await ConferenceTracksSchema
            .findOne({ isActive: true, isApproved: true });

        if (!data)
        {
            return '';
        }

        return data;
    },
    findToBeApproved : async () =>
    {
        const data = await ConferenceTracksSchema
            .findOne({ isActive: true, isApproved: false });

        return data;
    },
    create : async (data) =>
    {
        const conferenceTrack = new ConferenceTracksSchema({
            description : data,
            isActive    : true,
            isApproved  : false,
        });

        // remove old tracks
        await ConferenceTracksSchema.remove({ isActive: true, isApproved: false });

        // create track
        const dataSaved = await conferenceTrack.save();

        return {
            created : true,
            data    : dataSaved,
        };
    },
    approve : async (description) =>
    {
        const approveData = await ConferenceTracksService.findToBeApproved();

        if (!approveData)
        {
            return null;
        }

        // remove old one
        await ConferenceTracksSchema.remove({ isActive: true, isApproved: true });

        // set approved
        const data = await ConferenceTracksSchema
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

module.exports = ConferenceTracksService;
