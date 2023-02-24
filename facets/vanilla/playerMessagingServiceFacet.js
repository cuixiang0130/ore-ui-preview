import { env } from "../../env.js";

const PLAYER_MESSAGING_SERVICE_FACET = "vanilla.playermessagingservice"

const PlayerMessagingServiceFacetStatus = {
    LOADING: 0,
    IMAGE_RETRIEVAL: 1,
    LOADED: 2
}

const exampleLongText = 'The Caves & Cliffs: Part II update has arrived, bringing new features and more to explore!\n\n• Increased the world height and depth, adding 50% more vertical space to build and explore\n• New cave generation to explore below your existing worlds\n• New cave and mountain biomes like Lush Caves and Jagged Peaks\n• Fixed over 70 bugs, issues, and parity changes\n\nTo see the full changelog, head to aka.ms/MinecraftUpdate.\nPlease search for any bugs you find on bugs.mojang.com and let us know what you think at feedback.minecraft.net!';
const exampleButtons = [{
    id: 'Dismiss',
    text: '',
    link: '',
    action: 'dismiss',
    reportClick: () => {
        console.log(`Messaging Service - clicked Dismiss Button`);
    },
    additionalProperties: []
}, {
    id: 'CallToAction',
    text: '',
    link: 'ebbead54-7b4f-46ff-9839-e715e482a88d',
    action: 'productId',
    reportClick: () => {
        console.log(`Messaging Service - clicked Unlock Button`);
    },
    additionalProperties: []
}];
const exampleImages = [{
    id: 'Primary',
    url: "",
    isLoaded: true,
    additionalProperties: []
}, {
    id: 'Secondary',
    url: "",
    isLoaded: true,
    additionalProperties: []
}, {
    id: 'Primary',
    url: "",
    isLoaded: true,
    additionalProperties: []
}];
const exampleAnnouncementMessages = [//template 1
    {
        id: 'ImageText',
        surface: 'LoginAnnouncement',
        template: 'ImageText',
        images: [exampleImages[0]],
        buttons: [exampleButtons[0]],
        additionalProperties: [{
            key: 'header',
            value: '1.14.0 Update'
        }, {
            key: 'body',
            value: exampleLongText
        }]
    }, //template 2
    {
        id: 'ImageThumbnailCTA',
        surface: 'LoginAnnouncement',
        template: 'ImageThumbnailCTA',
        images: [exampleImages[0], exampleImages[1]],
        buttons: [exampleButtons[0], exampleButtons[1]],
        additionalProperties: [{
            key: 'header',
            value: 'Minecraft Spring Sale'
        }, {
            key: 'body',
            value: exampleLongText
        }]
    }, //template 3
    {
        id: 'HeroImageCTA',
        surface: 'LoginAnnouncement',
        template: 'HeroImageCTA',
        images: [exampleImages[2]],
        buttons: [exampleButtons[0], exampleButtons[1]],
        additionalProperties: [{
            key: 'header',
            value: 'Special Gift'
        }, {
            key: 'body',
            value: 'Dress up as a Nether denizen with this free pack!'
        }]
    }];

const playerMessagingServiceFacet = {
    status: PlayerMessagingServiceFacetStatus.LOADED,
    data: {
        messageCount: exampleAnnouncementMessages.length,
        messages: Array.from(Array(exampleAnnouncementMessages.length).keys()).map(key => {
            const message = {
                id: exampleAnnouncementMessages[key].id,
                surface: exampleAnnouncementMessages[key].surface,
                template: exampleAnnouncementMessages[key].template,
                images: exampleAnnouncementMessages[key].images,
                buttons: exampleAnnouncementMessages[key].buttons,
                additionalProperties: exampleAnnouncementMessages[key].additionalProperties
            };
            return message;
        })
    },
    reportClick: (messageID, buttonID) => {
        console.log(`Messaging Service - reporting click for message "${messageID}" on button "${buttonID}"`);
    },
    reportDismiss: messageID => {
        console.log(`Messaging Service - reporting dismiss for message "${messageID}"`);
    }
};

const playerMessagingServiceFacetLoading = {
    status: PlayerMessagingServiceFacetStatus.LOADING,
    data: {
        messageCount: 0,
        messages: []
    },
    reportClick: (messageID, buttonID) => {
        console.log(`Messaging Service - reporting click for message "${messageID}" on button "${buttonID}"`);
    },
    reportDismiss: messageID => {
        console.log(`Messaging Service - reporting dismiss for message "${messageID}"`);
    }
};

env.registerFacet(PLAYER_MESSAGING_SERVICE_FACET,playerMessagingServiceFacet);