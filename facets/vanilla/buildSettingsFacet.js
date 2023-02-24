import { env } from "../../env.js";

const BUILD_SETTINGS_FACET = "vanilla.buildSettings"

const buildSettingsFacet = {
    isDevBuild: true,
    isEduBuild: false,
    isPreviewBuild: false
};

env.registerFacet(BUILD_SETTINGS_FACET,buildSettingsFacet);