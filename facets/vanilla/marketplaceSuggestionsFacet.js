import { env } from "../../env.js";

const MARKETPLACE_SUGGESTIONS_FACET = "vanilla.marketplaceSuggestions"

const marketplaceSuggestionsFacet = {
    getMorePacks: {
        pageId: 'mock-id',
        title: 'Mock Title'
      }
};

env.registerFacet(MARKETPLACE_SUGGESTIONS_FACET,marketplaceSuggestionsFacet);