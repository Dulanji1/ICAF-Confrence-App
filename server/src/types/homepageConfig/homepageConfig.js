function HomepageConfig()
{
    this.title = '';
    this.subTitle = '';
    this.subTitleSuffix = '';
    this.aboutConference = '';
    this.keynoteSpeakers = '';
    this.guestSpeakers = '';
    this.importantDates = '';
}

HomepageConfig.prototype.isValid = function()
{
    // check whether all the properties are not null and not empty
    return Object.values(this).some((x) => (x !== null && x !== ''));
};

module.exports = HomepageConfig;
