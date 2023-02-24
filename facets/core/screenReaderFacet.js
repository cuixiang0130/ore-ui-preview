import { env } from "../../env.js";

const SCREEN_READER_FACET ="core.screenReader"

const screenReaderFacet = {
  isChatTextToSpeechEnabled: false,
  isIdle: false,
  isUITextToSpeechEnabled: false,
  clear: function () {
    console.log('[ScreenReader] clear()')
  }
};

env.registerFacet(SCREEN_READER_FACET,screenReaderFacet);