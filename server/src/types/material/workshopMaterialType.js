function WorkshopMaterialType()
{
    this.title = '';
    this.publisherName = '';
    this.description = '';
    this.publishDate = '';
    this.user = '';
}

WorkshopMaterialType.prototype.isValid = function()
{
    // check that name is exists
    if (typeof this.title === 'undefined'
        || typeof this.publisherName === 'undefined'
        || typeof this.description === 'undefined'
        || typeof this.publishDate === 'undefined'
        || typeof this.user === 'undefined'
    )
    {
        return false;
    }

    if (!this.title.length > 0
        || !this.publisherName.length > 0
        || !this.publishDate.length > 0
        || !this.user.length > 0
    )
    {
        return false;
    }

    return true;
};

module.exports = WorkshopMaterialType;
