import React from "react";
import { useParams } from "react-router-dom";

function Video() {
  let { id } = useParams();

  console.log(id);
  return <div>Text</div>;
}

export default Video;
