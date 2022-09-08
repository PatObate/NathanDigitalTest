import React, { useEffect, useRef } from "react";
import "../../scss/hero.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef();
  const triangleRef = useRef();
  const headerRef = useRef();
  const subRef = useRef();
  const tl1 = useRef();

  useEffect(() => {
    tl1.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=300",
          pin: true,
          scrub: 2,
        },
      })
      .add("start")
      .add("end")
      .to(
        triangleRef.current,
        {
          x: -500,
          scale: 15,
        },
        "start"
      )
      // .from(
      //   containerRef.current,
      //   {
      //     background:
      //       "linear-gradient(13deg, rgba(109,109,199,1) 35%, rgba(12,157,186,1) 100%)",
      //   },
      //   "start"
      // )
      // .to(
      //   containerRef.current,
      //   {
      //     background:
      //       "linear-gradient(13deg, rgba(128,85,121,1) 14%, rgba(244,38,73,1) 100%)",
      //   },
      //   "start"
      // )
      .to(
        headerRef.current,
        {
          opacity: 0,
          scale: 0.7,
        },
        "start"
      )
      .to(
        subRef.current,
        {
          opacity: 0,
          scale: 0.7,
        },
        "start"
      )
      // .to(
      //   containerRef.current,
      //   {
      //     height: "100px",
      //     delay: 2,
      //   },
      //   "end"
      // );
  }, []);

  return (
    <div className="hero-wrapper" ref={containerRef}>
      <div className="hero-container">
        <h1 className="header" ref={headerRef}>
          We Create The Next
        </h1>
        <p className="sub" ref={subRef}>
          You can proceed by scrolling. Or use the button below for a more
          detailed experience.
        </p>
        <div className="triangle-top" />
        <div className="triangle-left" />
        <div className="triangle-bottom" />
        <div className="triangle-right" ref={triangleRef} />
      </div>
    </div>
  );
};

export default HeroSection;
