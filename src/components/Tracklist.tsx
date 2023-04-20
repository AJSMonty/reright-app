import React from "react";
import { apiResponse } from "../models/APIModel";

function TrackList() {
  console.log(apiResponse);
  return (
    <div>
      <h1>Tracklist</h1>
      {apiResponse.compositions.map((track: any, index: number) => {
        return (
          <div className="track-item" key={track.id}>
            <h3>{track.title}</h3>
            <p>{track.creationYear}</p>
            <p>
              {track.contributors.length}{" "}
              {track.contributors.length > 1 ? "Contributors" : "Contributor"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TrackList;
