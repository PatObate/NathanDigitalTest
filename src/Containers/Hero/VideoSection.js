import React from "react";
import "../../scss/video.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  return (
    <div className="video-container">
      <div className="demo-video">
        <h1 className="demo-text">
          Nathan Digital Highlights
          <br /> <span className="demo-tiny">Under 2 minutes</span>
        </h1>
      </div>
    </div>
  );
};

export default VideoSection;
