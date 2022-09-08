import React, { useState } from "react";
import HeroSection from "../Containers/Hero/HeroSection";
import TransformSection from "../Containers/Hero/TransformSection";
import VideoSection from "../Containers/Hero/VideoSection";
import TestSections from "../Containers/Hero/TestSections";
import Helmet from "react-helmet";
import CustomCursor from "../components/cursor";

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => setIsHover(true);
  const handleHover2 = () => setIsHover(false);

  return (
    <>
      <CustomCursor isHover={isHover} />
      <HeroSection />
      <TransformSection handleHover={handleHover} handleHover2={handleHover2} />
      <VideoSection />
      <VideoSection />
      <VideoSection />
      {/* <TestSections /> */}
    </>
  );
};

export default Home;
