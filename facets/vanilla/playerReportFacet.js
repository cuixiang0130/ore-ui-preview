import { env } from "../../env.js";

const PLAYER_REPORT_FACET = "vanilla.playerReport"

const playerReportFacet = {
    isChatAvailable: () => {
        return true;
      },
      reportPlayer: () => {
        console.log('[PlayerReport] reportPlayer()');
      },
      reportArea: 0,
      reportReason: 0,
      reportMessage: '',
      xuid: '',
      uuid: '',
      selectedChatMessages: [],
      reportableChatMessages: [{
        message: 'Hello there',
        author: 'Steve',
        isAuthorBeingReported: false
      }, {
        message: 'Yo',
        author: 'Alex',
        isAuthorBeingReported: true
      }, {
        message: 'This is a fake message',
        author: 'Steve',
        isAuthorBeingReported: false
      }, {
        message: 'Very nice',
        author: 'Alex',
        isAuthorBeingReported: true
      }, {
        message: 'Test 123',
        author: 'Alex',
        isAuthorBeingReported: true
      }, {
        message: 'Howdy',
        author: 'Grubba',
        isAuthorBeingReported: false
      }]
};

env.registerFacet(PLAYER_REPORT_FACET,playerReportFacet);