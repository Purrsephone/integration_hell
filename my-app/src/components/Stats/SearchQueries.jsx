import React from "react";
import "./FormatStats.css";

export function searchQueries(data) {
  if (data && data[0] && data[0].userIntent) {
    let totalCharacters = 0;
    let msDuration = 0;
    const platforms = [data[0].platform];

    //average number of characters clicked before you make an interaction
    for (var i = 0; i < data.length; i++) {
      if (data[i].typedQuery) {
        totalCharacters += data[i].typedQuery.length;
      }
    }

    //average amount of time it took to search
    for (i = 0; i < data.length; i++) {
      msDuration += parseInt(data[i].msDuration);
    }

    //unique number of platforms used to search
    for (i = 0; i < data.length; i++) {
      if (platforms.includes(data[i].platform) === false) {
        platforms.push(data[i].platform);
      }
    }

    return (
      <div>
        <h1 className="title">SearchQueries.json Stats</h1> <br />
        <h3 className="stat">The average amount of characters you type per search is{" "}
        {totalCharacters / data.length}. </h3> <br />
        <h3 className="stat">The average amount of time it takes for you to search is{" "}
        {msDuration / data.length / 1000} seconds. </h3> <br />
        <h3 className="stat">The number of unique platforms you have used to search is{" "}
        {platforms.length}.</h3> <br />
      </div>
    );
  }
}