import { InputMethod, Platforms } from "./deviceInfomation.js";
import { env } from "../../env.js";

const DEVICE_INFOMATION_FACET = "core.deviceInformation";

const deviceInformationFacet = {
    inputMethods: [InputMethod.GAMEPAD, InputMethod.MOUSE],
    platform: Platforms.UWP,
    isLowMemoryDevice: false,
    guiScaleModifier: 0,
    guiScaleBase: 4,
    pixelsPerMillimeter: 3.779527559,
    // 96dpi,
    displayWidth: 1920,
    displayHeight: 1080,
    storageSize: Math.pow(1024, 4),
    storageUsed: Math.pow(1024, 4) * 0.75,
    isStorageFull: false,
    isStorageLow: false,
    isUsingAlternativeStorage: false
};

const GUI_SCALE_VALUES = [1, 2, 3, 4, 5, 6, 7, 8];

function getGuiScaleIndexForLargeScreen(width, height) {
    const widthNeeded = 376;
    const heightNeeded = 250;
    const widthScale = width / widthNeeded;
    const heightScale = height / heightNeeded; // This will ensure we are using an allowed GUI SCALE.  It will clamp to the biggest available GUI SCALE that is smaller or equal to the desired one

    const index = getGuiScaleIndex(Math.min(heightScale, widthScale));
    const scale = GUI_SCALE_VALUES[index];
    return scale;
}

function getGuiScaleIndex(scale) {
    let scaleIndex = 0;
    const guiScaleSize = GUI_SCALE_VALUES.length;

    for (let index = 0; index < guiScaleSize; ++index) {
        if (resolveGuiScale(index) > scale) {
            break;
        }

        scaleIndex = index;
    }

    return scaleIndex;
}

function resolveGuiScale(index) {
    const clampedIndex = Math.min(GUI_SCALE_VALUES.length - 1, Math.max(0, index));
    return GUI_SCALE_VALUES[clampedIndex];
}

env.registerFacet(DEVICE_INFOMATION_FACET,deviceInformationFacet);
