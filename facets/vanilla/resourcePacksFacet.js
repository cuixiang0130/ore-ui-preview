import { env } from "../../env.js";

const RESOURCE_PACKS_FACET = "vanilla.resourcePacks"

const resourcePacksFacet = {
    texturePacks: {
      activeGlobal: [],
      active: [],
      available: [
        {
          image: "/hbui/assets/pack-image-6ba6e.png",
          name: "Minecraft",
          description: "A test resource pack!",
          id: "7f4bt1a2-43dd-45b1-aa3f-0b3ca2ebd5c8",
          contentId: "7f4bt1a2-43dd-45b1-aa3f-0b3ca2ebd5c8",
          isMarketplaceItem: false,
        }
      ],
      realms: [],
      unowned: [],
    },
    behaviorPacks: {
      active: [],
      available: [
        {
          image: "/hbui/assets/pack-image-6ba6e.png",
          name: "Minecraft",
          description: "A test behavior pack!",
          id: "7f4bt1a2-43dd-45b1-aa3f-0b3ca2ebd5c8",
          contentId: "7f4bt1a2-43dd-45b1-aa3f-0b3ca2ebd5c8",
          isMarketplaceItem: false,
        }
      ],
    },
    status: 0,
    marketplacePackId: "1",
    userOwnsAtLeastOnePack: true,
    prompt: {
      actions: [],
      active: !1,
      body: "",
      handleAction: () => {
        console.log("[EngineWrapper/RPFacet] prompt.handleAction()");
      },
      id: "prompt",
      title: "",
    },
    activate: () => {
      console.log("[EngineWrapper/RPFacet] activate()");
    },
    cancelDownload: () => false,
    confirmDownload: () => false,
    changePackPriority: () => {},
    deactivate: () => {
      console.log("[EngineWrapper/RPFacet] deactivate()");
    },
    showSettings: () => {}
  };

env.registerFacet(RESOURCE_PACKS_FACET,resourcePacksFacet);