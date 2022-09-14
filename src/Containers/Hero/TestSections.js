import React, { useEffect, useRef } from "react";
import "../../scss/test.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const TestSections = () => {
  let panels = gsap.utils.toArray(".panel");
  useEffect(() => {
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: i === panels - 1 ? false : true,
        pinSpacing: false,
      });
    });
  });
  return (
    <>
      <div className="panel black">1st section</div>
      <div className="panel red">2nd section</div>
      <div className="static blue">static section</div>
      <div className="static black">static section</div>
      <div className="static red">static section</div>
    </>
  );
};

export default TestSections;
