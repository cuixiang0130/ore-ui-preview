import { env } from "../../env.js";

const DEBUG_SETTINGS_FACET = "vanilla.debugSettings"

const BiomeDimension = {
    OVERWORLD: 0,
    NETHER: 1
}


const allBiomes = [{
    label: 'Nether 1',
    id: 0,
    dimension: BiomeDimension.NETHER
}, {
    label: 'Nether 2',
    id: 1,
    dimension: BiomeDimension.NETHER
}, {
    label: 'Nether 3',
    id: 2,
    dimension: BiomeDimension.NETHER
}, {
    label: 'Nether 4',
    id: 3,
    dimension: BiomeDimension.NETHER
}, {
    label: 'Random overworld biome',
    id: 4,
    dimension: BiomeDimension.OVERWORLD
}, {
    label: 'Overworld 2',
    id: 5,
    dimension: BiomeDimension.OVERWORLD
}, {
    label: 'Overworld 3',
    id: 6,
    dimension: BiomeDimension.OVERWORLD
}, {
    label: 'Overworld 4',
    id: 7,
    dimension: BiomeDimension.OVERWORLD
}, {
    label: 'Overworld 5',
    id: 8,
    dimension: BiomeDimension.OVERWORLD
}, {
    label: 'Overworld 6',
    id: 9,
    dimension: BiomeDimension.OVERWORLD
}];

const debugSettingsFacet = {
    flatNether: false,
    enableGameVersionOverride: false,
    gameVersionOverride: '',
    spawnDimensionId: 0,
    spawnBiomeId: 0,
    biomeOverrideId: 0,
    allBiomes: allBiomes,
    defaultSpawnBiome: true,
    isBiomeOverrideActive: false
};

env.registerFacet(DEBUG_SETTINGS_FACET,debugSettingsFacet);