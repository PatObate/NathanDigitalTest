import React from "react";
import {
  VideoBackground,
  VideoWrapper,
} from "../../styled-components/VideoElements";
import vid from "../../video/Nathan+Digital+Video.mp4";

const VideoModal = () => {
  return (
    <VideoBackground>
      <VideoWrapper controls={true}>
        <source src={vid} type="video/mp4" />
      </VideoWrapper>
    </VideoBackground>
  );
};

export default VideoModal;
