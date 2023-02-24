import { env } from "../../env.js";

const ANIMATION_FACET = "core.animation"

const animationFacet = {
    screenAnimationEnabled: true,
};

env.registerFacet(ANIMATION_FACET,animationFacet);