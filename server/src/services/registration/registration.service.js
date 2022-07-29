const { RegistrationViewSchema } = require("../../models");

const RegistrationService = {
    find : async () =>
    {
        const data = await RegistrationViewSchema
            .findOne({ isActive: true, isApproved: true });

        if (!data)
        {
            return '';
        }

        return data;
    },
    findToBeApproved : async () =>
    {
        const data = await RegistrationViewSchema
            .findOne({ isActive: true, isApproved: false });

        return data;
    },
    create : async (data) =>
    {
        const registrationView = new RegistrationViewSchema({
            description : data,
            isActive    : true,
            isApproved  : false,
        });

        // remove old edits
        await RegistrationViewSchema.remove({ isActive: true, isApproved: false });

        // create user
        const dataSaved = await registrationView.save();

        return {
            created : true,
            data    : dataSaved,
        };
    },
    approve : async (description) =>
    {
        const approveData = await RegistrationService.findToBeApproved();

        if (!approveData)
        {
            return null;
        }

        // remove old one
        await RegistrationViewSchema.remove({ isActive: true, isApproved: true });

        // set approved
        const data = await RegistrationViewSchema
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

module.exports = RegistrationService;
