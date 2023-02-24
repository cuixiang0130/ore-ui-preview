import { env } from "../../env.js";

const TELEMETRY_FACET = "vanilla.telemetry"

const telemetryFacet = {
    fireEventButtonPressed: function (event) {
        console.log(`[Telemetry] EventButtonPressed: ${event}`);
    },
};

env.registerFacet(TELEMETRY_FACET,telemetryFacet);