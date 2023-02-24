import { GameMode, Difficulty, GeneralMultiplayerWarningState, PlayerPermissions, PlayerAccess } from "./worldEnum.js"
import { env } from "../../env.js";

const WORLD_EDITOR_FACET = "vanilla.worldEditor"

const worldEditorFacet = {
    loadWorld: {
        run: () => { },
        clear: () => { }
    },
    duplicateWorld: {
        run: () => { },
        clear: () => { },
        result: undefined
    },
    worldData: {
        general: {
            worldName: 'my own world',
            gameMode: GameMode.SURVIVAL,
            difficulty: Difficulty.EASY
        },
        advanced: {
            worldSeed: '54MP1E5EED',
            useFlatWorld: false,
            startWithMap: false,
            bonusChest: false,
            showCoordinates: false,
            firesSpreads: true,
            tntExplodes: true,
            respawnBlocksExplode: true,
            mobLoot: true,
            naturalRegeneration: true,
            tileDrops: true,
            immediateRespawn: false,
            respawnRadius: '5',
            simulationDistance: 8
        },
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
        lockedTemplate: false
    },
    worldSummary: {
        fileSize: '300 MB',
        lastPlayed: '2 Jan 2023'
    },
    saveWorld: {
        run: () => { },
        clear: () => { }
    },
    closeWorld: () => { },
    deleteWorld: () => { },
    isAchievementsEditDisabled: false
}

env.registerFacet(WORLD_EDITOR_FACET,worldEditorFacet);