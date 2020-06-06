import React from "react";
import loaderGif from "../images/gif/loading-gear.gif";

export const Loading = () => {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img src={loaderGif} alt="loading..." />
    </div>
  );
};
