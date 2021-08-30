import React from "react";
import { topArtistPerPlaylist, top10SongsAcrossPlaylists } from "./Functions";
import "./FormatStats.css";

export function playlists(data) {
  if (data && data.playlists) {
    return (
      <div>
        <h1 className="title">Playlists.json Stats</h1> <br />
        {topArtistPerPlaylist(data)}
        <br />
        {top10SongsAcrossPlaylists(data)}
        <br />
      </div>
    );
  }
}
