"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_api_ts_sdk_1 = require("@spotify/web-api-ts-sdk");
var config_1 = require("./config");
var sdk = web_api_ts_sdk_1.SpotifyApi.withClientCredentials(config_1.client_id, "secret", ["scope1", "scope2"]);
var items = await sdk.search("The Beatles", ["artist"]);
console.table(items.artists.items.map(function (item) { return ({
    name: item.name,
    followers: item.followers.total,
    popularity: item.popularity,
}); }));
