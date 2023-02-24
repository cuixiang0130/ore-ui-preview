import { env } from "../../env.js";

const CLIPBOARD_FACET = "vanilla.clipboard"

const clipboardFacet = {
    copyToClipboard: () => {}
};

env.registerFacet(CLIPBOARD_FACET,clipboardFacet);