import { env } from "../../env.js";

const USER_ACCOUNT_FACET = "vanilla.userAccount"

const userAccountFacet = {
    isTrialAccount: false,
    isLoggedInWithMicrosoftAccount: true,
    hasPremiumNetworkAccess: true,
    showPremiumNetworkUpsellModal: function () {
        console.log(`[UserAccount] showPremiumNetworkUpsellModal()`);
    },
    showMicrosoftAccountLogInScreen: function () {
        console.log(`[UserAccount] showMicrosoftAccountLogInScreen()`);
    },
};

env.registerFacet(USER_ACCOUNT_FACET,userAccountFacet);