import { env } from "../../env.js";

const REALMS_STORIES_FACET = "vanilla.realmsStories"

const RealmsStoriesFacetStatus = {
    UNLOADED: -1,
    LOADING: 0,
    LOADED: 1
}

const RealmMemberFilterOption = {
    All: 0,
    Online: 1,
    Operators: 2,
    Members: 3,
    Visitors: 4,
    Friends: 5
}

const RealmMemberSortOption = {
    MostRecent: 0,
    AlphabeticalAscending: 1,
    AlphabeticalDescending: 2,
    LeastRecent: 3
}

const RealmPlayerRoleEnum = {
    NONMEMBER: -1,
    VISITOR: 0,
    MEMBER: 1,
    OPERATOR: 2,
    OWNER: 3
}

const playerI = {
    gamerTag: 'PlayerUno',
    gamerIcon: '',
    role: RealmPlayerRoleEnum.OPERATOR,
    isOnline: true,
    profileStatus: RealmsStoriesFacetStatus.LOADED,
    recentSessions: [],
    recentSessionsStatus: RealmsStoriesFacetStatus.LOADED
};

const dummyRealmStories = [{
    id: '1001',
    author: playerI,
    body: 'Hey miners, in the next coming weeks I will be creating a new world for the Infinity Dungeon resource pack! The world will be up for a couple of months. To celebrate this world’s launch we will be having a weekend event where we can all explore the infinite dungeon together! ',
    timePosted: '8 Hours Ago',
    image: '',
    imageStatus: RealmsStoriesFacetStatus.LOADED,
    comments: [],
    commentsStatus: RealmsStoriesFacetStatus.LOADED,
    totalComments: 0,
    totalLikes: 72,
    hasLiked: true,
    isNew: true
}, {
    id: '1002',
    author: playerI,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet pulvinar velit et tincidunt. Donec id nisi justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum ex elit. Quisque rhoncus, lorem at malesuada convallis, erat metus vulputate dolor, quis dapibus ex nulla vel nisl. In dapibus condimentum scelerisque.',
    image: '',
    imageStatus: RealmsStoriesFacetStatus.UNLOADED,
    timePosted: '1 Week Ago',
    comments: [],
    commentsStatus: RealmsStoriesFacetStatus.LOADED,
    totalComments: 3,
    totalLikes: 4,
    hasLiked: false,
    isNew: false
}];

const exampleRealmData = {
    id: '523f19',
    stories: Array.from(Array(dummyRealmStories.length).keys()).map(key => {
        var _dummyRealmStories$in, _dummyRealmStories$in2;

        const index = key % dummyRealmStories.length;
        return {
            id: `${dummyRealmStories[index].id}`,
            author: dummyRealmStories[index].author,
            body: dummyRealmStories[index].body,
            timePosted: dummyRealmStories[index].timePosted,
            image: dummyRealmStories[index].image,
            imageStatus: dummyRealmStories[index].imageStatus,
            comments: dummyRealmStories[index].comments,
            commentsStatus: dummyRealmStories[index].commentsStatus,
            totalComments: (_dummyRealmStories$in = (_dummyRealmStories$in2 = dummyRealmStories[index].comments) === null || _dummyRealmStories$in2 === void 0 ? void 0 : _dummyRealmStories$in2.length) !== null && _dummyRealmStories$in !== void 0 ? _dummyRealmStories$in : 0,
            totalLikes: dummyRealmStories[index].totalLikes,
            hasLiked: dummyRealmStories[index].hasLiked,
            isNew: dummyRealmStories[index].isNew
        };
    }),
    storiesStatus: RealmsStoriesFacetStatus.LOADED,
    members: [],
    membersStatus: RealmsStoriesFacetStatus.LOADED,
    localScreenshots: [],
    localScreenshotsStatus: RealmsStoriesFacetStatus.LOADED
};

const blankRealmPersistentData = {
    currentStoryId: '',
    postInProgressBody: '',
    storyScreenshotSelectionFilePath: '',
    currentMemberFilterOption: RealmMemberFilterOption.All,
    currentMemberSearchText: '',
    currentMemberSortOption: RealmMemberSortOption.MostRecent
};

const testRealmActions = {
    postStory: {
        call: function () {
            console.log('Story has been posted');
        },
        error: null
    },
    postComment: {
        call: function () {
            console.log('Comment has been posted');
        },
        error: null
    }
};

const realmsStoriesFacet = {
    status: RealmsStoriesFacetStatus.LOADED,
    data: exampleRealmData,
    persistentData: blankRealmPersistentData,
    actions: testRealmActions
};

env.registerFacet(REALMS_STORIES_FACET,realmsStoriesFacet);