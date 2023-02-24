const CREATE_NEW_WORLD_BETA_FACET = "vanilla.createNewWorldBeta"

const createNewWorldBetaFacet = {
    isBetaSupported: true,
    openFeedbackPage: function () {
        console.log(`[CreateNewWorldBeta] openFeedbackPage()`);
    },
    optOutOfBeta: function () {
        console.log(`[CreateNewWorldBeta] optOutOfBeta()`);
    }
};


