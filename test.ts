import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { client_id } from "./config";
import { client_secret } from "./config";

console.log(client_secret);
// const sdk = SpotifyApi.withClientCredentials("client_id", "secret", ["scope1", "scope2"]);

const sdk = SpotifyApi.withUserAuthorization("client-id", "https://localhost:3000", ["scope1", "scope2"]);
const user = await sdk.currentUser.profile()

const items = await sdk.search("The Beatles", ["artist"]);

console.table(items.artists.items.map((item) => ({
    name: item.name,
    followers: item.followers.total,
    popularity: item.popularity,
})));