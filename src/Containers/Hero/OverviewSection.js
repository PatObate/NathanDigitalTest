import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import {
  OverviewButton,
  OverviewCard,
  OverviewContainer,
  OverviewContent,
  OverviewData,
  OverviewHeader,
  OverviewImg,
  OverviewMenu,
  OverviewRow,
  OverviewRow2,
} from "../../styled-components/OverviewElements";
import blue from "../../svgs/OverviewSection/blue-wallet.svg";
import yellow from "../../svgs/OverviewSection/yellow-wallet.svg";
import red from "../../svgs/OverviewSection/red-wallet.svg";
import green from "../../svgs/OverviewSection/green-wallet.svg";
import data from "../../images/OverviewSection/computer-data.png";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const OverviewSection = () => {
  const cardRef = useRef();
  const overviewRef = useRef();
  const overHeaderRef = useRef();
  const tl4 = useRef();
  const a = gsap.utils.selector(overviewRef);

  const onEnter = () => {
    gsap.to(cardRef.current, { y: 0, opacity: 1 });
  };

  const onLeave = () => {
    gsap.to(cardRef.current, { y: 200, opacity: 0 });
  };

  useLayoutEffect(() => {
    tl4.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top +=500",
        },
      })
      .from(a(".overview-header"), {
        x: -100,
        duration: 0.3,
        opacity: 0,
      })
      .from(a(".overview-menu"), {
        x: -100,
        duration: 0.3,
        opacity: 0,
      })
      .from(a(".overview-card"), {
        y: 200,
        duration: 0.3,
        opacity: 0,
      });
  }, []);

  return (
    <OverviewContainer ref={overviewRef}>
      <OverviewHeader className="overview-header">
        Our Product
        <br />
        Overview
      </OverviewHeader>
      <OverviewContent>
        <OverviewMenu className="overview-menu">
          <ul>
            <li onClick={onEnter}>SUPPLY CHAIN MANAGEMENT</li>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
              CRM and Customer Experience
            </li>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
              Financial Management
            </li>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
              Business Technology Platform
            </li>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
              Spend Management
            </li>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
              Human Capital
            </li>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
              Workflow Automation
            </li>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
              Performance
            </li>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
              Task Management
            </li>
          </ul>
        </OverviewMenu>
        <OverviewCard className="overview-card" ref={cardRef}>
          <OverviewRow>
            <OverviewData>
              <div className="icon1">
                <img src={blue} alt="img" />
              </div>
              <h2>Supply Chain Planning</h2>
              <p>
                With an integrated approach to <br />
                supply chain planning, you can <br />
                respond effectively to changes in
                <br />
                supply, demand, and market <br />
                conditions.
              </p>
            </OverviewData>
            <OverviewData>
              <div className="icon2">
                <img src={yellow} alt="img" />
              </div>
              <h2>Manufacturing</h2>
              <p>
                Fast-track time to market, gain
                <br />
                new production efficiencies, and <br />
                lower costs with ND manufacturing <br />
                software and Industrial Internet of <br />
              </p>
            </OverviewData>
          </OverviewRow>
          <OverviewRow2>
            <OverviewImg src={data} alt="img" />
            <OverviewButton>Explore</OverviewButton>
          </OverviewRow2>
          <OverviewRow>
            <OverviewData>
              <div className="icon3">
                <img src={red} alt="img" />
              </div>
              <h2>Supply Chain Logistics</h2>
              <p>
                Manage goods efficiently across
                <br />
                warehousing, fullfilment, and <br />
                distribution with our supply chain
                <br />
                logistics management software
                <br />
              </p>
            </OverviewData>
            <OverviewData>
              <div className="icon4">
                <img src={green} alt="img" />
              </div>
              <h2>Product Lifecycle Management</h2>
              <p>
                With an integrated approach to <br />
                supply chain planning, you can <br />
                respond effectively to changes in
                <br />
                supply, demand, and market <br />
                conditions.
              </p>
            </OverviewData>
          </OverviewRow>
        </OverviewCard>
      </OverviewContent>
    </OverviewContainer>
  );
};

export default OverviewSection;
