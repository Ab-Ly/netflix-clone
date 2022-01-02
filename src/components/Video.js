import React from "react";
import { useParams } from "react-router-dom";
import "./Video.scss";

function Video() {
  // let { id } = useParams();
  let id = "mgBOSPX4XWM";
  console.log(id);
  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
