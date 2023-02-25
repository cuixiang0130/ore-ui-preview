import { env } from "../../env.js";

const SOUND_FACET = "core.sound";

const soundFacet = {
    play: function (key) {
        env.playSound(key)
    }
};

env.registerFacet(SOUND_FACET,soundFacet);