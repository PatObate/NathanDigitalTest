import React, { useLayoutEffect, useRef } from "react";
import "../../scss/work.scss";
import girl from "../../images/WorkSection/girl.png";
import gsap from "gsap";

const WorkSection = () => {
  const workRef = useRef();
  const x = gsap.utils.selector(workRef);

  useLayoutEffect(() => {
    gsap.to(x(".work-girl"), {
      rotation: 360,
      transformOrigin: "center",
      ease: "none",
      duration: 60,
      repeat: -1,
    });

  }, []);

  return (
    <div className="work-container" ref={workRef}>
      <h1 className="work-heading">
        Let's work together <br />
        to make it happen.
      </h1>
      <div className="work-wrapper">
        <div className="work-row">
          <img src={girl} alt="girl" className="work-girl" />
          <div className="work-bubble1">#ProductDevelopment</div>
          <div className="work-bubble2">#CRMImplementation</div>
          <div className="work-bubble3">#APIintegration</div>
          <div className="work-bubble4">#APIintegration</div>
          <div className="work-bubble5">#HRAnalytics</div>
          <div className="work-bubble6">#DataArtificialIntelligence</div>
        </div>
        <div className="work-row2">
          <h2>What we do</h2>
          <h1>
            Trusted experts. Proven <br />
            results.
          </h1>
          <p>
            Our large network of UAE lenders includes established <br />
            and trusted brands includes government entities.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
