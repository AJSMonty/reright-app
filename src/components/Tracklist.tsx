import React, { useState } from "react";
import { apiResponse } from "../models/APIModel";
import Track from "./Track";
import { trackSchema } from "../models/Schemas";
import { Input } from "@mui/material";

function TrackList() {
  console.log(apiResponse);
  const [listedTracks, setListedTracks] = useState(apiResponse.compositions);
  let filteredTracks = [];
  let searchValue = "";

  const filterTracks = () => {
    filteredTracks = apiResponse.compositions.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    setListedTracks(filteredTracks);
  };

  const handleSearch = (event: any) => {
    searchValue = event.target.value;
    filterTracks();
  };

  return (
    <div>
      <Input
        className="mb32"
        type="text"
        placeholder="Search here..."
        onChange={handleSearch}
      ></Input>
      <h1 className="mb32">Tracklist</h1>
      {listedTracks.length > 0 ? (
        listedTracks.map((track: trackSchema, index: number) => {
          return <Track key={track.id} track={track} index={index}></Track>;
        })
      ) : (
        <div>No tracks match your search</div>
      )}
      <div className="text-center text-light">
        {listedTracks.length} {listedTracks.length === 1 ? "track" : "tracks"}
      </div>
    </div>
  );
}

export default TrackList;
