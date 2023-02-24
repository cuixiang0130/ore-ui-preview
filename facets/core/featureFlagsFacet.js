import { env } from "../../env.js";

const FEATURE_FLAGS_FACET = "core.featureFlags"

const featureFlagsFacet = {
    flags: [
        "facet",
        "core.deviceInformation",
        "core.input",
        "core.locale",
        "core.router",
        "core.safeZone",
        "core.screenReader",
        "core.splitScreen",
        "vanilla.achievements",
        'vanilla.achievementsReward',
        'vanilla.editor.enableUI',
        "vanilla.enableSeedTemplates",
        "vanilla.enableBehaviorPacksTab",
        "vanilla.enableResourcePacksTab",
        "vanilla.enableResourcePacksRealmsPlusFeatureFlag",
    ],
};

env.registerFacet(FEATURE_FLAGS_FACET,featureFlagsFacet);
