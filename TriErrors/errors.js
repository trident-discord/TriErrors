const TriErrors = {
    missingRequiredArgument: "You did not provide enough arguments, please try again.",
    badArgument: "You did not provide the correct argument, please try again.",
    botMissingPermissions: "I am missig the required permissions to execute this action.",
    missingAuthorization: "You are not a developer of Trident, therefore you cannot use this command.",
    nsfwCommand: "This command is restricted to NSFW channels only, therefore please use it inside of a channel with the NSFW flag.",
    premiumCommand: "This command is for donators only, therefore please donate in order to execute it.",
    unknownError: "An unknown error has occurred, extra information has been sent to the developers.",
    apiError: "An unknown error has occurred with the Trident API, extra information has been sent to the developers."
};

module.exports = TriErrors;
