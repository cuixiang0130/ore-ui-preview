import { env } from "../../env.js";

const ACHIEVEMENTS_FACET = "vanilla.achievements"

const AchievementFacetStatus = {
    LOADING: 0,
    LOADED: 1
}

const achievementsFacet = {
    status: AchievementFacetStatus.LOADED,
    data: {
        achievementsUnlocked: 1,
        maxAchievements: 1,
        hoursPlayed: 400,
        currentGamerScore: 300,
        maxGamerScore: 300,
        achievements: [
            {
                id: "0",
                name: 'Sleeping with the fishes',
                description: 'Spend a day under water',
                gamerScore: 30,
                progress: 0,
                progressTarget: 1,
                isLocked: true,
                isSecret: false,
                dateUnlocked: 0,
                hasReward: false,
                rewardImage: "",
                rewardName: "",
                isRewardOwned: false,
                rewardId: "",
                image:""
            }
        ],
    },
};

const achievementsFacetLoading = {
    status: AchievementFacetStatus.LOADING,
    data: {
        achievementsUnlocked: 0,
        maxAchievements: 0,
        hoursPlayed: 0,
        currentGamerScore: 0,
        maxGamerScore: 0,
        achievements: []
    }
};

env.registerFacet(ACHIEVEMENTS_FACET,achievementsFacet);