import React, { useLayoutEffect, useRef } from "react";
import "../../scss/hero.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import triangle from "../../svgs/HeroSection/triangle.svg";
import triangletrans from "../../svgs/HeroSection/triangletrans.svg";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef();
  const triangleRef = useRef();
  const headerRef = useRef();
  const subRef = useRef();
  const tl1 = useRef();
  let navigate = useNavigate();

  function handleSubmit() {
    navigate("home");
  }

  useLayoutEffect(() => {
    // ScrollTrigger.create({
    //   trigger: containerRef.current,
    //   start: "top top",
    //   end: "bottom +=400",
    //   onEnter: handleSubmit,
    // });

    tl1.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400",
          onLeave: handleSubmit,
          pin: true,
          id: "my-id",
          scrub: 2,
        },
      })
      .add("background")
      .add("header")
      .add("text")
      .add("triangle")
      .from(containerRef.current, {
        background:
          "linear-gradient(13deg, rgba(109,109,199,1) 35%, rgba(12,157,186,1) 100%)",
        zIndex: 3,
      })
      .from(containerRef.current, {
        background: "transparent",
        zIndex: 3,
      })
      .to(
        headerRef.current,
        {
          opacity: 0,
          scale: 0.7,
        },
        "header"
      )
      .to(
        subRef.current,
        {
          opacity: 0,
          scale: 0.7,
        },
        "text"
      )
      .to(
        triangleRef.current,
        {
          x: -500,
          scale: 20,
        },
        "triangle"
      );

    // .to(
    //   containerRef.current,
    //   {
    //     display: "none",
    //   },
    //   "triangle"
    // );

    // .to(
    //   containerRef.current,
    //   {
    //     height: "100px",
    //     delay: 2,
    //   },
    //   "end"
    // );
    // tl1.current.scrollTrigger.kill();
  });

  return (
    <div>
      <div className="hero-wrapper" ref={containerRef}>
        <div className="hero-container">
          <h1 className="header" ref={headerRef}>
            We Create The Next
          </h1>
          <p className="sub" ref={subRef}>
            You can proceed by scrolling. Or use the button below for a more
            detailed experience.
          </p>
          <img src={triangletrans} alt="triangle" className="triangle-top" />
          <img src={triangletrans} alt="triangle" className="triangle-left" />
          <img src={triangletrans} alt="triangle" className="triangle-bottom" />
          <img
            src={triangle}
            alt="triangle"
            className="triangle-right"
            ref={triangleRef}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
