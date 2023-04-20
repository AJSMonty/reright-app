import React from "react";
import { apiResponse } from "../models/APIModel";
import Track from "./Track";

function TrackList() {
  console.log(apiResponse);
  return (
    <div>
      <h1 className="mb32">Tracklist</h1>
      {apiResponse.compositions.map((track: any, index: number) => {
        return <Track key={track.id} track={track} index={index}></Track>;
      })}
    </div>
  );
}

export default TrackList;
