import React, { useEffect, useRef } from "react";
import "../../scss/test.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const TestSections = () => {
  const testRef = useRef();
  const rotateEffect = () => {
    var cards = gsap.utils.toArray(".box"),
      radius = 520;

    gsap.set(".test-container", {
      perspective: 900,
      transformStyle: "preserve-3d",
    });

    cards.forEach(function (element, index) {
      gsap.set(element, {
        rotationY: (index * 360) / cards.length,
        transformOrigin: "50% 50% " + -radius,
      });
      gsap.to(element, {
        rotationY: "-=150",
        scrollTrigger: {
          trigger: testRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 2,
          pin: testRef.current,
        },
      });
    });
  };

  useEffect(() => {
    // ScrollTrigger.getById("myId").kill();
    rotateEffect();
  }, []);

  return (
    <>
      <div className="container-div" ref={testRef}>
        <div className="test-container">
          <div className="box red"></div>
          <div className="box purple"></div>
          <div className="box blue"></div>
          <div className="box green"></div>
        </div>
      </div>
    </>
  );
};

export default TestSections;
