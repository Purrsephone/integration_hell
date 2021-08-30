import React from "react";
import "./FormatStats.css";

export function arrtoStr(arr) {
  if (arr.length === 0) {
    return "";
  }
  if (arr.length === 1) {
    return arr[0];
  }
  let rvString = arr[0];
  for (var i = 1; i < arr.length - 1; i++) {
    rvString += ", " + arr[i];
  }
  return rvString + ", and " + arr[arr.length - 1];
}

function topTen(array) {
  // frequencies of artists
  let counter = Object.create(null);
  array.forEach(function(arr) {
    counter[arr] = (counter[arr] || 0) + 1;
  });

  // sort the artists by frequency
  array.sort(function(x, y) {
    return counter[y] - counter[x];
  });

  // remove duplicates
  let topElements = [...new Set(array)];

  let top10 = [];
  for (var j = 0; j <= 9; j++) {
    let arr = "";
    for (var i = 0; i < topElements.length; i++) {
      arr = topElements[j];
    }
    top10[j] = arr;
  }
  return arrtoStr(top10);
}

export function top10Artists(data) {
  if (data && data[0] && data[0].msPlayed) {
    // array of artists
    const artists = [];
    for (let i = 0; i < data.length; i++) {
      artists[i] = data[i].artistName;
    }
    const topArtists = topTen(artists);
    return (
      <div>
        {" "}
        <h3 className="stat">Your top 10 artists are: {topArtists}</h3>{" "}
      </div>
    );
  }
}

function top_Artist(artists) {
  let max_frequency = 1;
  let top_artist = "";
  let frequency = 0;

  for (let i = 0; i < artists.length; i++) {
    for (let j = 1; j < artists.length; j++) {
      if (artists[i] === artists[j]) {
        frequency++;
      }
      if (frequency > max_frequency) {
        max_frequency = frequency;
        top_artist = artists[i];
      }
    }
    frequency = 0;
  }
  return top_artist;
}

export function topArtistPerPlaylist(data) {
  if (data && data.playlists) {
    // array of artists in one playlist
    const artists = [];
    //array of top artists in one playlist
    const playlistArtist = [];

    // going through each playlist
    for (let a = 0; a < data.playlists.length; a++) {
      for (let k = 0; k < data.playlists[a].items.length; k++) {
        artists[k] = data.playlists[a].items[k].track.artistName;
      }

      //top artist in playlist
      let topArtist = top_Artist(artists);

      playlistArtist[a] =
        "Playlist Name: " + data.playlists[a].name + "Top Artist: " + topArtist;
    }
    return (
      <div>
        <h3 className="stat">{arrtoStr(playlistArtist)}</h3>
      </div>
    );
  }
}

export function top10SongsAcrossPlaylists(data) {
  //array of all songs found across all playlists
  let songs = [];
  for (let a = 0; a < data.playlists.length; a++) {
    for (let k = 0; k < data.playlists[a].items.length; k++) {
      songs[k] = data.playlists[a].items[k].track.trackName;
    }
  }

  const topSongs = topTen(songs);

  return (
    <div>
      {" "}
      <h3 className="stat">
        Your top 10 songs across all playlists are: {topSongs}
      </h3>
    </div>
  );
}
