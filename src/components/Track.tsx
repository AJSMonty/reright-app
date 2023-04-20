import React from "react";

function Track(props: any) {
  const track = props.track;
  const index = props.index;
  return (
    <div
      className="track-item"
      style={
        {
          "--animation-delay-number": index,
        } as React.CSSProperties
      }
    >
      <img src="/images/moonlight-sonata.jpeg" alt={track.title}></img>
      <div className="pl16">
        <h3>{track.title}</h3>
        <p>{track.creationYear}</p>
        <p>
          {track.contributors.length}{" "}
          {track.contributors.length > 1 ? "Contributors" : "Contributor"}
        </p>
      </div>
    </div>
  );
}

export default Track;
