import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../Containers/Hero/HeroSection";
import TransformSection from "../Containers/Hero/TransformSection";
import VideoSection from "../Containers/Hero/VideoSection";
import TestSections from "../Containers/Hero/TestSections";
import Helmet from "react-helmet";
import CustomCursor from "../components/cursor";
import { Wave } from "../styled-components/WaveElements";
import wave from "../Lottie/purple-wave.json";
import WaveSection from "../Containers/Hero/WaveSection";
import OverviewSection from "../Containers/Hero/OverviewSection";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import TrustedSection from "../Containers/Hero/TrustedSection";
import WorkSection from "../Containers/Hero/WorkSection";
import InsightsSection from "../Containers/Hero/InsightsSection";
import BottomSection from "../Containers/Hero/BottomSection";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => setIsHover(true);
  const handleHover2 = () => setIsHover(false);
  const sectionRef = useRef();

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <CustomCursor isHover={isHover} />
        <HeroSection />
        <WaveSection
          ref={sectionRef}
          handleHover={handleHover}
          handleHover2={handleHover2}
        />
        <OverviewSection className="panel" />
        <TrustedSection />
        <WorkSection />
        <InsightsSection />
        <BottomSection />
        {/* <TransformSection />
        <VideoSection /> */}
        {/* <TestSections /> */}
      </div>
    </>
  );
};

export default Home;
