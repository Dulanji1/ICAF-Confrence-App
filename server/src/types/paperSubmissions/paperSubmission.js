function PaperSubmissions()
{
    this.title = '';
    this.category = '';
    this.publisherName = '';
    this.description = '';
    this.publisherDate = '';
    this.file = '';
}

PaperSubmissions.prototype.isValid = function()
{
    // check whether all the properties are not null and not empty
    return Object.values(this).some((x) => (x !== null && x !== ''));
};

module.exports = PaperSubmissions;
