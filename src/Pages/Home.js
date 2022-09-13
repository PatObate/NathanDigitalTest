import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../Containers/Hero/HeroSection";
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
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => setIsHover(true);
  const handleHover2 = () => setIsHover(false);

  let panels = gsap.utils.toArray(".panel");

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: i === panels.length - 1 ? false : true,
      pinSpacing: false,
    });
  });

  return (
    <>
      <div>
        <CustomCursor isHover={isHover} />
        <HeroSection />
        <WaveSection
          handleHover={handleHover}
          handleHover2={handleHover2}
          className="panel"
        />
        <OverviewSection className="panel" />
        <TrustedSection />
        <WorkSection />
        <InsightsSection />
        <BottomSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Home;
