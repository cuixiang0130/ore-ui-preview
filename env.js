function createProxy(name, obj) {
  const result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      result[key] = createProxy(name, obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return new Proxy(result, {
    set(target, attr, newValue) {
      target[attr] = newValue
      env.handlers[`facet:updated:${name}`](env.sharedFacets[name])
      return true
    }
  });
}

const translations = {};

let soundDefinitions = {};


window.__FACETS__ = {};

export const env = {
  sharedFacets: {},
  handlers: {
    "facet:request": function (name) {
      const facet = env.sharedFacets[name]
      if (facet) {
        console.log(`[EventHandler] facet:request: ${name}`);
        env.handlers[`facet:updated:${name}`](facet);
      } else {
        console.error(`[EventHandler] facet:request Missing facet: ${name}`);
        env.handlers[`facet:error:${name}`]('activate-facet-not-found');
      }
    },
    "facet:discard": function () {
      console.log("[EventHandler] facet:discard")
    },
    "core:gui:resize-hack": function () {
      console.log("[EventHandler] core:gui:resize-hack")
    },
    "core:routing:not-found": function () {
      console.log("[EventHandler] core:routing:not-found")
    },
    "core:telemetry:firstContentfulPaint": function () {
      console.log("[EventHandler] core:telemetry:firstContentfulPaint")
    },
    "core:telemetry:firstMeaningfulPaint": function () {
      console.log("[EventHandler] core:telemetry:firstMeaningfulPaint")
    },
    "core:exception": function () {
      console.error("[EventHandler] core:exception");
    }
  },

  registerFacet(name, facet) {
    let sharedFacet = name.startsWith("core.") ? facet : createProxy(name, facet)
    this.sharedFacets[name] = sharedFacet
    const names = name.split('.')
    window.__FACETS__[names[names.length - 1]] = sharedFacet
  },

  addEventHandler(event, handler) {
    this.handlers[event] = handler
  },

  trigger(data) {
    const [event, ...args] = data
    const handler = env.handlers[event];
    if (handler) {
      handler(...args)
    } else {
      console.warn(`[Engine] Unhandled ${event}`);
    }
  },

  defaultRoute : window.location.hash.slice(1) || '/achievements',

  lang: navigator.language || "en_US",

  translate(key) {
    return translations[key]
  },

  playSound: function (key) {
    const soundDefinition = soundDefinitions[key];
    if (soundDefinition && soundDefinition.sounds.length != false) {
      let randomSound = soundDefinition.sounds[Math.floor(Math.random() * soundDefinition.sounds.length)].name;
      new Audio(randomSound).play();
    } else {
      console.warn(`[Sound] Missing sound for key :${key}`);
    }
  }

};

fetch(`/hbui/${env.lang.replace("-", "_")}.lang`)
  .then((response) => response.text())
  .then((langs) => {
    let lines = langs.split("\n");
    for (let line of lines) {
      const keyval = line.split("=");
      translations[keyval[0]] = keyval[1]?.replace("\r", "").replace(/#.*/g, "");
    }
  })

fetch("/hbui/sound_definitions.json").then((response) => response.json()).then((response)=>{
  soundDefinitions = response;
})

