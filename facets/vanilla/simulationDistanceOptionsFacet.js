import { env } from "../../env.js";

const SIMULATION_DISTANCE_OPTIONS_FACET = "vanilla.simulationDistanceOptions"

const simulationDistanceOptionsFacet = {
    simulationDistanceOptions: [4, 6, 8, 10]
};

env.registerFacet(SIMULATION_DISTANCE_OPTIONS_FACET,simulationDistanceOptionsFacet);