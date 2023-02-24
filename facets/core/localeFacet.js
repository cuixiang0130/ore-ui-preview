import { env } from "../../env.js";

const LOCALE_FACET = "core.locale"

const localeFacet = {
    locale: env.lang,
    formatDate: function (timestampInSeconds) {
        const date = new Date(timestampInSeconds * 1000);
        return `${date.toLocaleDateString()}`;
    },
    translate: function (key) {
        const translation = env.translate(key);

        if (translation == null) {
          console.warn(`[Locale] Missing translation for key "${key}"`);
          return key;
        }
    
        return translation;
    },
    translateWithParameters: function (key, params) {
        let translation = this.translate(key);
        if (translation) {
            for (let i = 1; i <= params.length; i++) {
                translation = translation.replaceAll("%" + i + "$s", params[i - 1])
            };
            return translation;
        } else {
            return key;
        }
    },

};

env.registerFacet(LOCALE_FACET,localeFacet);

