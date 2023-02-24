import { env } from "../../env.js";

const SEED_TEMPLATES_FACET = "vanilla.seedTemplates"

const seedTemplatesFacet = {
    templates: [
      {
        seedValue: "0",
        title: "The Nothing Seed",
        image: "/hbui/assets/world-preview-default-d72bc.jpg",
      }
    ],
  };

env.registerFacet(SEED_TEMPLATES_FACET,seedTemplatesFacet);