import { GameMode, Difficulty, GeneralMultiplayerWarningState, PlayerPermissions, PlayerAccess } from "./worldEnum.js"
import { env } from "../../env.js";

const CREATE_NEW_WORLD_FACET = "vanilla.createNewWorld"

const DaylightCycle = {
    NORMAL: 0,
    ALWAYS_DAY: 1
}

const ExperimentalFeatureCategory = {
    GAMEPLAY: 0,
    ADD_ON_CREATORS: 1,
    INTERNAL_TESTS: 2
}

const createNewWorldFacet = {
    createWorld: {
        call: () => { },
        error: null
    },
    createOnRealms: {
        call: () => { console.log("[CreateNewWorld] createOnRealms.call()"); },
        error: null
    },
    unlockTemplateSettings: () => { },
    consumeResetFlag: false,
    isLockedTemplate: false,
    isUsingTemplate: false,
    isAchievementsDisabled: false,
    isEditorWorld: false,
    applyTemplate: templateId => {
        console.log("[CreateNewWorld] applyTemplate.bind()");
        return templateId;
    },
    checkIfUserHasChangedSettings: () => true,
    levelId: '',
    showedAchievementWarning: false,
    inWorldCreation: false,
    worldPreviewImagePath: '',
    worldCreationData: {
        multiplayer: {
            generalWarningState: GeneralMultiplayerWarningState.NONE,
            multiplayerSupported: true,
            playerPermissions: PlayerPermissions.MEMBER,
            multiplayerGame: true,
            playerAccess: PlayerAccess.FRIENDS,
            visibleToLanPlayers: true,
            friendlyFire: true,
            platformPlayerAccess: PlayerAccess.FRIENDS,
            platformPlayerAccessSupported: false,
            platformPlayerAccessEnabled: true,
            platformPlayerInviteAccessSupported: true
        },
        general: {
            worldName: "Some World",
            difficulty: 0,
            gameMode: 0,
        },
        betaFeatures: [{
            id: '0',
            title: 'Caves and cliffs blocks',
            description: 'Goats, snowier snow and what else might lurk behind the next block?',
            isEnabled: false,
            category: ExperimentalFeatureCategory.GAMEPLAY
        }, {
            id: '1',
            title: 'Cave generation',
            description: 'Explore the new varied cave generation',
            isEnabled: false,
            category: ExperimentalFeatureCategory.GAMEPLAY
        }, {
            id: '2',
            title: 'Custom Biomes',
            description: 'Create custom biomes and change world generation in your add-ons',
            isEnabled: false,
            category: ExperimentalFeatureCategory.ADD_ON_CREATORS
        }, {
            id: '3',
            title: 'Additional modding capabilities',
            description: 'Doing a lot of repetitive things? This might help creating your add-on',
            isEnabled: false,
            category: ExperimentalFeatureCategory.ADD_ON_CREATORS
        }, {
            id: '4',
            title: 'GameTest Framework',
            description: 'What is this?',
            isEnabled: false,
            category: ExperimentalFeatureCategory.ADD_ON_CREATORS
        }, {
            id: '5',
            title: 'Holiday Creator Features',
            description: 'Includes actor properties and data-driven fog volumes for add-ons',
            isEnabled: false,
            category: ExperimentalFeatureCategory.ADD_ON_CREATORS
        }],
        cheats: {
            cheatsEnabled: false,
            commandsEnabled: true,
            daylightCycle: DaylightCycle.NORMAL,
            keepInventory: false,
            mobSpawning: false,
            mobGriefing: false,
            entitiesDropLoot: false,
            weather: false,
            commandBlocks: false,
            educationEdition: false,
            tickSpeed: '1'
        },
        advanced: {
            useFlatWorld: false,
            simulationDistance: 8,
            startWithMap: false,
            bonusChest: false,
            showCoordinates: false,
            firesSpreads: true,
            tntExplodes: true,
            respawnBlocksExplode: true,
            mobLoot: true,
            naturalRegeneration: true,
            tileDrops: true,
            immediateRespawn: true,
            respawnRadius: "5",
            worldSeed: "",
        },

    }
};

env.registerFacet(CREATE_NEW_WORLD_FACET,createNewWorldFacet);