import React, { useEffect, useRef } from "react";
import "../../scss/test2.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const TestSection2 = () => {
  const containerRef = useRef();
  const moduleContainerRef = useRef();

  useEffect(() => {
    gsap.to(containerRef.current, {
      x: () =>
        -(
          containerRef.current.scrollWidth -
          document.documentElement.clientWidth
        ) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: moduleContainerRef.current,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  });
  return (
    <>
      <div className="modulecontainer" ref={moduleContainerRef}>
        <div id="container" ref={containerRef}>
          <div className="module green"></div>
          <div className="module yellow"></div>
          <div className="module purple"></div>
          <div className="module orange"></div>
          <div className="module blue"></div>
          <div className="module red"></div>
        </div>
      </div>
      <div className="modulecontainer"></div>
    </>
  );
};

export default TestSection2;
