"use strict"
import { env } from "./env.js"

import "./coreFacets.js"
import "./vanillaFacets.js"
import "./vanillaGameplayFacets.js"

import "./devtools.js"

const engine = {
    TriggerEvent: {
        apply: function (thiz, data) {
            env.trigger(data)
        },
    },
    SendMessage: function (name, id) {
        console.log(`[Engine] SendMessge : ${name}`)
    },
    BindingsReady: function (...version) {
        console.log(`[Engine] BindingsReady version : ${JSON.stringify(version)}`);
    },
    AddOrRemoveOnHandler: function (event, handler, context) {
        env.addEventHandler(event,handler);
    },
    RemoveOnHandler: function (name) {
    },
    createJSModel: function (name, handler) {
        console.log(`[Engine] createJSModel : ${name}`)
    },
    unregisterModel: function (name) {
    },
    updateWholeModel: function (name) {
    },
    synchronizeModels: function () {

    },
    addargsBindEventListner: function () {

    },
    removeargsBindEventListner: function () {

    },
    translate: function (key) {
        return env.translate(key)
    }
};

window.engine = engine;
