import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { client_id } from "./config";

const sdk = SpotifyApi.withClientCredentials(client_id, "secret", ["scope1", "scope2"]);

const items = await sdk.search("The Beatles", ["artist"]);

console.table(items.artists.items.map((item) => ({
    name: item.name,
    followers: item.followers.total,
    popularity: item.popularity,
})));