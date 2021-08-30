import React from "react";
import "./FormatStats.css";

export function yourLibrary(data) {
  //const platforms_total = data.reduce((a, o) =>  (a.push(o.platform), a), [])
  if (data && data.tracks) {
    const albums = [{ album: data.tracks[0].album, count: 0 }];
    const artists = [{ artist: data.tracks[0].artist, count: 0 }];
    for (var i = 0; i < data.tracks.length; i++) {
      if (albums.includes(data.tracks[i].album) === false) {
        albums.push({ album: data.tracks[i].album, count: 1 });
      }
      if (artists.includes(data.tracks[i].artist) === false) {
        artists.push({ artist: data.tracks[i].artist, count: 1 });
      }
    }
    return (
      <div>
        <h1 className="title">YourLibrary.json Stats</h1> <br />
        <h3 className="stat">You have {albums.length} unique albums and {artists.length} unique
        artists in your library.</h3><br />
      </div>
    );
  }
}
