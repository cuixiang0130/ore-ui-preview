import { env } from "../../env.js";

const PROFANITY_FILTER_FACET = "vanilla.profanityFilter"

const profanityFilterFacet = {
    isProfanityInString: stringToCheck => {
        return !!stringToCheck && stringToCheck.includes('bummer');
    }
};

env.registerFacet(PROFANITY_FILTER_FACET,profanityFilterFacet);