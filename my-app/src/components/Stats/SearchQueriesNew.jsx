import React from "react";
import "./FormatStats.css";

export function searchQueriesNew(data) {
  if (data && data[0] && data[0].searchInteractionURIs) {
    let totalCharacters = 0;
    let hours = 0;
    let minutes = 0;
    var i = 0;
    const platforms = [data[0].platform];

    //average number of characters tyoed before you make an interaction
    for (i = 0; i < data.length; i++) {
      if (data[i].searchQuery) {
        totalCharacters += data[i].searchQuery.length;
      }
    }

    //average time of day you make a search
    for (i = 0; i < data.length; i++) {
      hours += parseInt(data[i].searchTime.substring(11, 13));
      minutes += parseInt(data[i].searchTime.substring(14, 16));
    }

    //unique number of platforms used to search
    for (i = 0; i < data.length; i++) {
      if (platforms.includes(data[i].platform) === false) {
        platforms.push(data[i].platform);
      }
    }

    if (platforms.includes("IPHONE") && platforms.includes("IPHONE_ARM64")) {
      let index;
      for (i = 0; i < platforms.length; i++) {
        if (platforms[i] === "IPHONE_ARM64") {
          index = i;
        }
      }
      platforms.splice(index, 1);
    }

    return (
      <div>
        <h1 className="title">SearchQueries.json Stats</h1> <br />
        <h3 className="stat">The average amount of characters you type per search is{" "}
        {totalCharacters / data.length}.</h3> <br />
        <h3 className="stat">The average time of day which you listen to music is{" "}
        {Math.trunc(hours / data.length)}:{Math.trunc(minutes / data.length)}.</h3>
        <br />
        <h3 className="stat">The number of unique platforms you have used to search is{" "}
        {platforms.length} platforms.</h3> <br />
        <h3 className="stat">The unique platforms you have used to search are {platforms + ", "}.</h3> <br />
      </div>
    );
  }
}