import React from "react";

interface VideoType {
  src: string;
  style?: Object;
}

const Video = ({ src, style }: VideoType) => {
  return (
    <iframe
      style={{ height: "25rem", ...style }}
      src={src}
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="video"
      width="100%"
    />
  );
};

export default Video;
