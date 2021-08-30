import React from "react";
import {top10Artists} from "./Functions";
import "./FormatStats.css";

export function streamingHistory(data) {
  if (data && data[0] && data[0].msPlayed) {
    //total time
    let count = 0;
    var i = 0;
    if (data) {
      for (i = 0; i < data.length; i++) {
        count += data[i].msPlayed;
      }
      count /= 1000;

      //time of day
      let hours = 0;
      let minutes = 0;

      for (i = 0; i < data.length; i++) {
        hours += parseInt(data[i].endTime.substring(11, 13));
        minutes += parseInt(data[i].endTime.substring(14));
      }

      //time per song
      let msListened = 0;

      for (i = 0; i < data.length; i++) {
        msListened += data[i].msPlayed;
      }

      //average amount per day
      const days = [data[0].platform];
      for (i = 0; i < data.length; i++) {
        if (days.includes(data[i].endTime.substring(0, 11)) === false) {
          days.push(data[i].endTime.substring(0, 11));
        }
      }

      return (
        <div>
          <h1 className="title">StreamingHistory.json Stats</h1> <br />
          <h3 className="stat">You listened to {count.toFixed(2)} seconds or {(count / 60).toFixed(2)} minutes of music in
          the past year.</h3> <br />
          <h3 className="stat">The average time of day which you listen to music is {Math.trunc(hours/data.length)}:{Math.trunc(minutes/data.length)}.</h3> <br />
          <h3 className="stat">The average amount of time you spent listening to a song is {(msListened/data.length/1000).toFixed(2)} seconds.</h3> <br />
          <h3 className="stat">The average amount of music you listen to each day is {(msListened/days.length/1000/60).toFixed(2)} minutes.</h3><br />
          <h3 className="stat">The total amount of days you have spent listening to music is {days.length} days.</h3> <br/>
          {top10Artists(data)}
          <br />
        </div>
      );
    }
  }
}
