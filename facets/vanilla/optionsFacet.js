import { env } from "../../env.js";

const OPTIONS_FACET = "vanilla.options"

const TouchControlScheme = {
    TOUCH: 0,
    CROSSHAIR: 1,
    CLASSIC: 2
}


const optionsFacet = {
    renderDistance: 17,
    defaultRenderDistance: 8,
    maxRenderDistance: 16,
    showRenderDistanceWarningModal: true,
    touchControlScheme: TouchControlScheme.TOUCH,
    showTouchControlSelectionScreen: false,
    useMobileDataOnce: false,
    playVideoInTouchControlSelectionScreen: true
};

env.registerFacet(OPTIONS_FACET,optionsFacet);