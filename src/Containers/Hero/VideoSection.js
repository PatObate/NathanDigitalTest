import React, { useEffect } from "react";
import "../../scss/video.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { Wave } from "../../styled-components/WaveElements";
import wave from "../../Lottie/purple-wave.json";
gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
  };

  return (
    <div className="video-container">
      <Wave
        animationData={wave}
        LottieOptions={defaultOptions}
        speed={0.25}
        isStopped={false}
        isPaused={false}
      />
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
