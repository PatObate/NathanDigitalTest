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
  const tl4Trigger = useRef();
  const a = gsap.utils.selector(overviewRef);
  useLayoutEffect(() => {
    gsap.set(a(".overview-card"), {
      y: 100,
      opacity: 0,
    });

    tl4.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top +=500",
        },
      })
      .from(a(".overview-header"), {
        x: -100,
        opacity: 0,
      })
      .from(a(".overview-menu"), {
        x: -100,
        opacity: 0,
      });

    tl4Trigger.current = gsap.timeline({
      scrollTrigger: {
        trigger: overviewRef.current,
        start: "top top",
        end: "+=3000px",
        scrub: 4,
        pin: true,
        snap: {
          snapTo: "labels",
          duration: { min: 0.2, max: 0.2 },
          delay: 0.1,
        },
      },
    });

    tl4Trigger.current
      .addLabel("start")
      .to(
        a(".li-1"),
        {
          color: "#71a2ff",
        },
        0
      )
      .to(
        a(".overview-card"),
        {
          y: 0,
          opacity: 1,
        },
        0
      )
      .addLabel("start2")
      .to(
        a(".overview-card"),
        {
          y: 100,
          opacity: 0,
        },
        1
      )
      .to(
        a(".li-1"),
        {
          color: "#fff",
        },
        1
      )
      .addLabel("start3")
      .to(
        a(".li-2"),
        {
          color: "#71a2ff",
        },
        2
      )
      .to(
        a(".overview-card"),
        {
          y: 0,
          opacity: 1,
        },
        2
      )
      .addLabel("start4")
      .to(
        a(".overview-card"),
        {
          y: 100,
          opacity: 0,
        },
        3
      )
      .to(
        a(".li-2"),
        {
          color: "#fff",
        },
        3
      )
      .addLabel("start5")
      .to(
        a(".li-3"),
        {
          color: "#71a2ff",
        },
        4
      )
      .to(
        a(".overview-card"),
        {
          y: 0,
          opacity: 1,
        },
        4
      )
      .addLabel("start6")
      .to(
        a(".overview-card"),
        {
          y: 100,
          opacity: 0,
        },
        5
      )
      .to(
        a(".li-3"),
        {
          color: "#fff",
        },
        5
      )
      .addLabel("start7")
      .to(
        a(".li-4"),
        {
          color: "#71a2ff",
        },
        6
      )
      .to(
        a(".overview-card"),
        {
          y: 0,
          opacity: 1,
        },
        6
      )
      .addLabel("start8")
      .to(
        a(".overview-card"),
        {
          y: 100,
          opacity: 0,
        },
        7
      )
      .to(
        a(".li-4"),
        {
          color: "#fff",
        },
        7
      );
  });

  return (
    <OverviewContainer ref={overviewRef}>
      <OverviewHeader className="overview-header">
        Our Product.
        <br />
        Overview.
      </OverviewHeader>
      <OverviewContent>
        <OverviewMenu className="overview-menu">
          <ul>
            <li className="li-1">SUPPLY CHAIN MANAGEMENT</li>
            <li className="li-2">CRM and Customer Experience</li>
            <li className="li-3">Financial Management</li>
            <li className="li-4">Business Technology Platform</li>
            <li>Spend Management</li>
            <li>Human Capital</li>
            <li>Workflow Automation</li>
            <li>Performance</li>
            <li>Task Management</li>
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
