import { env } from "../../env.js";

const CUSTOM_SCALING_FACET = "core.customScaling"

const customScalingFacet = {
    scalingModeOverride: undefined,
    fixedGuiScaleModifier: 0,
    MIN_FIXED_GUI_SCALE_MODIFIER: -3,
    MAX_FIXED_GUI_SCALE_MODIFIER: 4,
    guiAccessibilityScaling: false
};

env.registerFacet(CUSTOM_SCALING_FACET,customScalingFacet);