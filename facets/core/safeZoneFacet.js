import { env } from "../../env.js";

const SAFE_ZONE_FACET = "core.safeZone"

const safeZoneFacet = {
    safeAreaX: 1,
    safeAreaY: 1,
    screenPositionX: 0,
    screenPositionY: 0
};

env.registerFacet(SAFE_ZONE_FACET,safeZoneFacet);