import React, { useState, useEffect } from "react";
import CustomCursor from "../components/cursor";
import WaveSection from "../Containers/Hero/WaveSection";
import OverviewSection from "../Containers/Hero/OverviewSection";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import TrustedSection from "../Containers/Hero/TrustedSection";
import WorkSection from "../Containers/Hero/WorkSection";
import InsightsSection from "../Containers/Hero/InsightsSection";
import BottomSection from "../Containers/Hero/BottomSection";
import FooterSection from "../Containers/Hero/FooterSection";
import TestSections from "../Containers/Hero/TestSections";
gsap.registerPlugin(ScrollTrigger);

const overlap = () => {
  let panelsecs = gsap.utils.toArray(".panelsec");

  panelsecs.forEach((panelsec, i) => {
    ScrollTrigger.create({
      trigger: panelsec,
      start: "top top",
      pin: i === panelsecs - 1 ? false : true,
      pinSpacing: false,
    });
  });
};

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => setIsHover(true);
  const handleHover2 = () => setIsHover(false);

  useEffect(() => {
    // ScrollTrigger.getById("myId").kill();
    overlap();
  }, []);

  return (
    <>
      <div>
        {/* <CustomCursor isHover={isHover} /> */}
        <WaveSection handleHover={handleHover} handleHover2={handleHover2} />
        <OverviewSection />
        <InsightsSection />
        {/* <TrustedSection /> */}
        <WorkSection />
        {/* <TestSections /> */}

        <BottomSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Home;
