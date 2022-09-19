import React, { useLayoutEffect, useRef } from "react";
import "../../scss/work.scss";
import girl from "../../images/WorkSection/girl.png";
import logo from "../../svgs/TransformSection/LogoLogo.svg";
import gsap from "gsap";

const WorkSection = () => {
  const workRef = useRef();
  const tl5 = useRef();
  const x = gsap.utils.selector(workRef);

  useLayoutEffect(() => {
    // gsap.to(x(".work-girl"), {
    //   rotation: 360,
    //   transformOrigin: "center",
    //   ease: "none",
    //   duration: 60,
    //   repeat: -1,
    // });

    tl5.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: workRef.current,
          start: "top +=500",
        },
      })
      .from(x(".work-heading"), {
        x: -100,
        duration: 0.3,
        opacity: 0,
      })
      .from(x(".work-girl"), {
        x: -100,
        duration: 0.3,
        opacity: 0,
      })
      .from(x(".bubble"), {
        duration: 0.2,
        opacity: 0,
      })
      .from(x(".work-h2"), {
        y: 100,
        duration: 0.25,
        opacity: 0,
      })
      .from(x(".work-h1"), {
        y: 100,
        duration: 0.25,
        opacity: 0,
      })
      .from(x(".work-p"), {
        y: 100,
        duration: 0.25,
        opacity: 0,
      })
      .from(x(".work-button"), {
        y: 100,
        duration: 0.2,
        opacity: 0,
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
          <img src={logo} alt="girl" className="work-girl" />
          <div className="work-bubble1 bubble">#ProductDevelopment</div>
          <div className="work-bubble2 bubble">#CRMImplementation</div>
          <div className="work-bubble3 bubble">#APIintegration</div>
          <div className="work-bubble4 bubble">#APIintegration</div>
          <div className="work-bubble5 bubble">#HRAnalytics</div>
          <div className="work-bubble6 bubble">#DataArtificialIntelligence</div>
        </div>
        <div className="work-row2">
          <h2 className="work-h2">What we do</h2>
          <h1 className="work-h1">
            Trusted experts. Proven <br />
            results.
          </h1>
          <p className="work-p">
            Our large network of UAE lenders includes established <br />
            and trusted brands includes government entities.
          </p>
          <button className="work-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
