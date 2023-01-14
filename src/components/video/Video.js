import React from "react";
import ReactPlayer from "react-player";
import "../video/Video.css";

const Video = () => {
  return (
    <div>
      <h1 className="watch-now" style={{ color: "hsl(85deg 54% 51%)" }}>
        Watch Now
      </h1>
      <div className="videoCont">
        <ReactPlayer
          id="videos1"
          url="https://www.youtube.com/watch?v=vkDS6V0gQMc"
          controls
        />
        <ReactPlayer
          className="mx-4"
          id="videos2"
          url="https://www.youtube.com/watch?v=_Deq998m_h8"
          controls
        />
      </div>
    </div>
  );
};

export default Video;
