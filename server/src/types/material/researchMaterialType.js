function ResearchMaterialType()
{
    this.category = '';
    this.title = '';
    this.publisherName = '';
    this.description = '';
    this.publishDate = '';
    this.user = '';
}

ResearchMaterialType.prototype.isValid = function()
{
    // check that name is exists
    if (
        typeof this.category === 'undefined'
        || typeof this.title === 'undefined'
        || typeof this.publisherName === 'undefined'
        || typeof this.description === 'undefined'
        || typeof this.publishDate === 'undefined'
        || typeof this.user === 'undefined'
    )
    {
        return false;
    }

    if (
        !this.category.length > 0
        || !this.title.length > 0
        || !this.publisherName.length > 0
        || !this.publishDate.length > 0
        || !this.user.length > 0
    )
    {
        return false;
    }

    return true;
};

module.exports = ResearchMaterialType;
