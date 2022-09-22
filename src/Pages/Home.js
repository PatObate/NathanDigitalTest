import React, { useState, useEffect } from "react";
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
import TestSection3 from "../Containers/Hero/TestSection3";
import BlogSection from "../Containers/Hero/BlogSection";
import Cursor from "../components/Cursor";
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
  // const [isHover, setIsHover] = useState(false);

  // const handleHover = () => setIsHover(true);
  // const handleHover2 = () => setIsHover(false);

  useEffect(() => {
    // ScrollTrigger.getById("myId").kill();
    overlap();
  }, []);

  return (
    <>
      <div>
        {/* <CustomCursor isHover={isHover} /> */}
        <Cursor />
        <WaveSection />
        <OverviewSection />
        <InsightsSection />
        {/* <TrustedSection /> */}
        <WorkSection />
        {/* <TestSections /> */}
        <BlogSection />
        <BottomSection />
        <FooterSection />
        {/* <TestSection3 /> */}
      </div>
    </>
  );
};

export default Home;
