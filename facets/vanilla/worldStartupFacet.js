import { env } from "../../env.js";

const WORLD_STARTUP_FACET = "vanilla.worldStartup"

const worldStartupFacet = {
};

env.registerFacet(WORLD_STARTUP_FACET,worldStartupFacet);