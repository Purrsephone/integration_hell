import React from "react";
import { follow } from "./Stats/Follow";
import { user_data } from "./Stats/UserData";
import { yourLibrary } from "./Stats/YourLibrary";
import { payments } from "./Stats/Payments";
import { searchQueries } from "./Stats/SearchQueries";
import { playlists } from "./Stats/Playlists";
import { streamingHistory } from "./Stats/StreamingHistoryData";
import { identity } from "./Stats/Identity";
import { searchQueriesNew } from "./Stats/SearchQueriesNew";
import { inferences } from "./Stats/Inferences";

export const displayStats = data => {
  return (
    <div>
      {streamingHistory(data)}
      {yourLibrary(data)}
      {playlists(data)}
      {searchQueries(data)}
      {user_data(data)}
      {follow(data)}
      {payments(data)}
      {identity(data)}
      {searchQueriesNew(data)}
      {inferences(data)}
    </div>
  );
};
