import React, { useLayoutEffect, useRef } from "react";
import "../../scss/work.scss";
import gsap from "gsap";

const WorkSection = () => {
  const workRef = useRef();
  const tl5 = useRef();
  const x = gsap.utils.selector(workRef);

  useLayoutEffect(() => {
    gsap.to(x(".work-circle-outer"), {
      rotation: 360,
      transformOrigin: "center",
      ease: "none",
      duration: 60,
      repeat: -1,
    });
    gsap.to(x(".work-circle-inner"), {
      rotation: -360,
      transformOrigin: "center",
      ease: "none",
      duration: 60,
      repeat: -1,
    });

    tl5.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: workRef.current,
          start: "top +=850",
        },
      })
      .from(x(".work-heading"), {
        x: -100,
        opacity: 0,
        ease: "back",
        duration: 0.6,
      })
      .from(x(".work-icon"), {
        duration: 0.12,
        ease: "back",
        opacity: 0,
      })
      .from(x(".work-window"), {
        duration: 0.12,
        ease: "back",
        opacity: 0,
      })
      .from(x(".work-cloud"), {
        duration: 0.12,
        ease: "back",
        opacity: 0,
      })
      .from(x(".work-aws"), {
        duration: 0.12,
        ease: "back",
        opacity: 0,
      })
      .from(x(".work-fox"), {
        duration: 0.12,
        ease: "back",
        opacity: 0,
      })
      .from(x(".work-math"), {
        duration: 0.12,
        ease: "back",
        opacity: 0,
      })
      .from(x(".work-man"), {
        duration: 0.12,
        ease: "back",
        opacity: 0,
      })
      .from(x(".work-client"), {
        duration: 0.12,
        ease: "back",
        opacity: 0,
      })
      .from(x(".work-circle-outer"), {
        opacity: 0,
        ease: "back",
        duration: 0.2,
      })
      .from(x(".work-circle-inner"), {
        opacity: 0,
        ease: "back",
        duration: 0.2,
      })
      .from(x(".work-row2"), {
        x: 100,
        opacity: 0,
        ease: "back",
        duration: 0.8,
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
          {/* <img src={logo} alt="girl" className="work-girl" />
           */}
          <div className="work-circle-outer" />
          <div className="work-circle-inner" />
          <div className="work-icon" />
          <div className="work-window" data-hover="microsoft implementation" />
          <div className="work-cloud" data-hover="google cloud" />
          <div className="work-aws" data-hover="amazon web services" />
          <div
            className="work-fox"
            data-hover="software development life cycle"
          />
          <div className="work-math" data-hover="functional consultant" />
          <div className="work-man" data-hover="technical consultant" />
          <div className="work-client" data-hover="client" />
        </div>
        <div className="work-row2">
          <h2 className="work-h2">What we do</h2>
          <h1 className="work-h1">
            Trusted experts. Proven <br />
            results.
          </h1>
          <div className="bubble-container">
            <div className="work-bubble1 bubble">#ProductDevelopment</div>
            <div className="work-bubble2 bubble">#CRMImplementation</div>
            <div className="work-bubble3 bubble">#APIintegration</div>
            <div className="work-bubble4 bubble">#APIintegration</div>
            <div className="work-bubble5 bubble">#HRAnalytics</div>
            <div className="work-bubble6 bubble">
              #DataArtificialIntelligence
            </div>
          </div>
          <div data-hover="contact">
            <button className="work-button" data-hover="contact us">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
