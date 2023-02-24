import { env } from "../../env.js";

const ROUTE_FACET = "core.router"

function updateRoute() {
  env.handlers["facet:updated:core.router"](env.sharedFacets[ROUTE_FACET])
}

const locations = [];
const defaultRoute = env.defaultRoute;

const routerFacet = {
  engineUITransitionTime: 800,
  history: {
    location: {
      hash: "",
      search: "",
      state: "",
      pathname: defaultRoute,
    },

    get length() {
      return locations.length;
    },
    replace: function (path) {
      locations.push(this.location.pathname);
      this.location.pathname = path;
      updateRoute()
    },
    goBack: function () {
      this.location.pathname = locations[locations.length - 2];
      updateRoute();
      locations.pop();
    },
    push: function (path) {
      locations.push(this.location.pathname);
      this.location.pathname = path;
      updateRoute()
    },
  },
};

env.registerFacet(ROUTE_FACET, routerFacet);