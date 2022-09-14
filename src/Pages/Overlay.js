import React, { useEffect } from "react";
import OverviewSection from "../Containers/Hero/OverviewSection";
import WaveSection from "../Containers/Hero/WaveSection";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Overlay = () => {
  let panels = gsap.utils.toArray(".panel");

  useEffect(() => {
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: i === panels - 1 ? false : true,
        pinSpacing: false,
        markers: true,
      });
    });
  });
  return (
    <>
      <WaveSection className="panel" />
      <OverviewSection className="panel" />
    </>
  );
};

export default Overlay;
