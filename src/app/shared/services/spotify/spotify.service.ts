import { Injectable } from "@angular/core";
import SpotifyWebApi from "spotify-web-api-js";

const CLIENT_ID = "a8b31f0911a743f2a816ec1a586c53b3";
const CLIENT_SECRET = "a4d1705f581c43129263a483bd41520d";
export const SPOTIFY_AUTH_REDIRECT_URL = "http://localhost:4200/authorized";
const STATE_STRING = Math.random().toString(36).substring(2, 15);
const SCOPE_LIST = [
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "user-library-modify",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-top-read",
  "user-read-recently-played",
  "user-follow-read",
  "user-follow-modify",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "app-remote-control",
  "streaming",
  "ugc-image-upload",
].join(" ");

@Injectable({
  providedIn: "any",
})
export class SpotifyService {
  constructor() {
    this.spotifyApi = new SpotifyWebApi();
  }

  spotifyApi: SpotifyWebApi.SpotifyWebApiJs;
  authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${SPOTIFY_AUTH_REDIRECT_URL}&scope=${SCOPE_LIST}&state=${STATE_STRING}`;
}
