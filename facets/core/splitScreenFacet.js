import { env } from "../../env.js";

const SPLIT_SCREEN_FACET = "core.splitScreen"

const SplitScreenDirection = {
    HORIZONTAL: 0,
    VERTICAL: 1
}
const splitScreenFacet = {
    numActivePlayers: 1,
    splitScreenPosition: 0,
    splitScreenDirection: SplitScreenDirection.HORIZONTAL,
};

env.registerFacet(SPLIT_SCREEN_FACET,splitScreenFacet);