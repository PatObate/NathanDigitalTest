import React, { useRef, useLayoutEffect } from "react";
import "../../scss/trusted.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import chanel from "../../images/TrustedSection/chanel.png";
import roche from "../../images/TrustedSection/roche.png";
import delong from "../../images/TrustedSection/delonghi.png";
import shon from "../../images/TrustedSection/shonfeld.png";
import momz from "../../images/TrustedSection/mumzworld.png";
import adq from "../../images/TrustedSection/adq.png";
import wilhe from "../../images/TrustedSection/wilhe.png";
import amap from "../../images/TrustedSection/a-map.png";
import med from "../../images/TrustedSection/med.png";
import alhal from "../../images/TrustedSection/alhandal.png";
import asfar from "../../images/TrustedSection/asfar.png";
import alfa from "../../images/TrustedSection/alfa.png";
gsap.registerPlugin(ScrollTrigger);

const TrustedSection = () => {
  const tl3 = useRef();
  const trustedRef = useRef();
  const q = gsap.utils.selector(trustedRef);

  useLayoutEffect(() => {
    tl3.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: trustedRef.current,
          start: "top +=300",
        },
      })
      .from(q(".trusted-header"), {
        x: -100,
        opacity: 0,
      })
      .from(q("#logo1"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      })
      .from(q("#logo2"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      })
      .from(q("#logo3"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      })
      .from(q("#logo4"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      })
      .from(q("#logo5"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      })
      .from(q("#logo6"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      })
      .from(q("#logo7"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      })
      .from(q("#logo8"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      })
      .from(q("#logo9"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      })
      .from(q("#logo10"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      })
      .from(q("#logo11"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      })
      .from(q("#logo12"), {
        opacity: 0,
        duration: 0.2,
        y: 100,
      });

    tl3.current.scrollTrigger.refresh();
  }, []);

  return (
    <>
      <div className="trusted-container" ref={trustedRef}>
        <div className="trusted-row">
          <h1 className="trusted-header">
            Trusted <br />
            Partners
          </h1>
          <p className="trusted-sub">
            X Our large network of UAE lenders includes established <br />
            and trusted brands includes government entities.
          </p>
        </div>
        <div className="trusted-row-2">
          <div className="trusted-col">
            <img src={chanel} alt="img" className="img1" id="logo1" />
            <img src={roche} alt="img" className="img1" id="logo2" />
            <img src={delong} alt="img" className="img1" id="logo3" />
            <img src={med} alt="img" className="img3" id="logo4" />
          </div>
          <div className="trusted-col">
            <img src={shon} alt="img" className="img2" id="logo5" />
            <img src={momz} alt="img" className="img1" id="logo6" />
            <img src={adq} alt="img" className="img1" id="logo7" />
            <img src={wilhe} alt="img" className="img1" id="logo8" />
          </div>
          <div className="trusted-col">
            <img src={amap} alt="img" className="img3" id="logo9" />
            <img src={alfa} alt="img" className="img1" id="logo10" />
            <img src={alhal} alt="img" className="img1" id="logo11" />
            <img src={asfar} alt="img" className="img2" id="logo12" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedSection;
