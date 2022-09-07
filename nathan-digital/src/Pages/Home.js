import React from "react";
import HeroSection from "../Containers/Hero/HeroSection";
import TransformSection from "../Containers/Hero/TransformSection";
import VideoSection from "../Containers/Hero/VideoSection";
import AnimatedCursor from "react-animated-cursor";
import TestSections from "../Containers/Hero/TestSections";

const Home = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <TransformSection />
      <VideoSection />
      <VideoSection />
      <VideoSection />
      {/* <TestSections /> */}
    </>
  );
};

export default Home;
