import { InputMethod } from "./deviceInfomation.js";
import { env } from "../../env.js";

const INPUT_FACET = "core.input"

const inputFacet = {
    acceptInputFromAllControllers: true,
    gameControllerId: '0',
    swapABButtons: false,
    swapXYButtons: false,
    currentInputType: InputMethod.MOUSE,
};

env.registerFacet(INPUT_FACET,inputFacet);