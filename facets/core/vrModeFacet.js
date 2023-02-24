import { env } from "../../env.js";

const VR_MODE_FACET = "core.vrMode"

const VRMode = {
    NoVR: 0,
    VRFull3DWorld: 1,
    VRVirtual2DScreen: 2
}

const vrModeFacet = {
    mode:VRMode.NoVR
};

env.registerFacet(VR_MODE_FACET,vrModeFacet);