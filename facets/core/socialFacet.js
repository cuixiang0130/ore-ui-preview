import { env } from "../../env.js";

const SOCIAL_FACET = "core.social"

const socialFacet = {};

env.registerFacet(SOCIAL_FACET,socialFacet);