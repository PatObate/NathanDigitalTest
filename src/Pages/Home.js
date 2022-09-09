import React, { useState } from "react";
import HeroSection from "../Containers/Hero/HeroSection";
import TransformSection from "../Containers/Hero/TransformSection";
import VideoSection from "../Containers/Hero/VideoSection";
import TestSections from "../Containers/Hero/TestSections";
import Helmet from "react-helmet";
import CustomCursor from "../components/cursor";
import { Wave } from "../styled-components/WaveElements";
import wave from "../Lottie/purple-wave.json";
import WaveSection from "../Containers/Hero/WaveSection";

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => setIsHover(true);
  const handleHover2 = () => setIsHover(false);

  return (
    <>
      <div>
        <CustomCursor isHover={isHover} />
        <HeroSection />

        <WaveSection handleHover={handleHover} handleHover2={handleHover2} />
        {/* <TransformSection />
        <VideoSection /> */}
        {/* <TestSections /> */}
      </div>
    </>
  );
};

export default Home;
