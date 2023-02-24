import { env } from "../../env.js";

const SOUND_FACET = "core.sound";

const soundFacet = {
    play: function (key) {
        const soundDefinition = env.soundDefinitions[key];
        if (soundDefinition && soundDefinition.sounds.length != false) {
            let randomSound = soundDefinition.sounds[Math.floor(Math.random() * soundDefinition.sounds.length)].name;
            env.playSound(randomSound);
        } else {
            console.warn(`[Sound] Missing sound for key :${key}`);
        }
    }
};

env.registerFacet(SOUND_FACET,soundFacet);