import { env } from "../../../env.js";

const IMMEDIATE_RESPWAN_FACET = "vanilla.gameplay.immediateRespawn"

const immediateRespawnSharedFacet = {};

env.registerFacet(IMMEDIATE_RESPWAN_FACET,immediateRespawnSharedFacet);