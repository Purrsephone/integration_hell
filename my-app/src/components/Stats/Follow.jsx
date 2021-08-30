import React from "react";
import "./FormatStats.css";

export function follow(data) {
  if (data && data.followerCount != null) {
    return (
      <div>
        <h1 className="title">Follow.json Stats</h1> <br />
        <h3 className="stat">You have {data.followerCount} followers.</h3> <br />
        <h3 className="stat">You are following {data.followingUsersCount} users.</h3> <br />
        <h3 className="stat">You are following {data.followingArtists} artists.</h3> <br />
      </div>
    );
  }
}