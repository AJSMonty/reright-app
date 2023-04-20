import React, { useState } from "react";
import { apiResponse } from "../models/APIModel";
import Track from "./Track";
import { trackSchema } from "../models/Schemas";

function TrackList() {
  console.log(apiResponse);
  const [listedTracks, setListedTracks] = useState(apiResponse.compositions);
  let filteredTracks = [];
  let searchValue = "";

  const filterTracks = () => {
    filteredTracks = apiResponse.compositions.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    console.log(filteredTracks);
    setListedTracks(filteredTracks);
  };

  const handleSearch = (event: any) => {
    console.log(event.target.value);
    searchValue = event.target.value;
    filterTracks();
  };

  return (
    <div>
      <h1 className="mb32">Tracklist</h1>
      <input className="mb32" type="text" onChange={handleSearch} />
      {listedTracks.map((track: trackSchema, index: number) => {
        return <Track key={track.id} track={track} index={index}></Track>;
      })}
    </div>
  );
}

export default TrackList;
