import { env } from "../../env.js";

const PLAYER_BANNED_FACET = "vanilla.playerBanned"

const playerBannedFacet = {
    openBannedInfoPage: function () {
        console.log("[PlayerBanned] openBannedInfoPage()");
    },
};

env.registerFacet(PLAYER_BANNED_FACET,playerBannedFacet);