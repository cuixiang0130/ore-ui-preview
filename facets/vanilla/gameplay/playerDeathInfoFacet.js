import { env } from "../../../env.js";

const PLAYER_DEATH_INFO_FACET = "vanilla.gameplay.playerDeathInfo"

const playerDeathInfoSharedFacet = {};

env.registerFacet(PLAYER_DEATH_INFO_FACET,playerDeathInfoSharedFacet);