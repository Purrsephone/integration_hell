import React from "react";
import "./FormatStats.css";

export function identity(data) {
  if (data && data.displayName) {
    let verified = "are not";
    if (data.verified) {
      verified = "are";
    }

    return (
      <div>
        <h1 className="title">Identity.json Stats</h1> <br />
        <h3 className="stat">Your display name is {data.displayName}.</h3> <br />
        <h3 className="stat">You {verified} verified. </h3> <br />
      </div>
    );
  }
}