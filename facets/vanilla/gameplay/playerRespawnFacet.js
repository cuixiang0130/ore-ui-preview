import { env } from "../../../env.js";

const PLAYER_RESPWAN_FACET = "vanilla.gameplay.playerRespawn"

const playerRespawnSharedFacet = {
    respawn : function(){}
};

env.registerFacet(PLAYER_RESPWAN_FACET,playerRespawnSharedFacet);
