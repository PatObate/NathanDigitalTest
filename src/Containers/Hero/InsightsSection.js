import React, { useRef, useLayoutEffect } from "react";
import {
  InsightCard,
  InsightCardHeader,
  InsightCardSub,
  InsightContainer,
  InsightContent,
  InsightHeader,
  InsightLogo,
  InsightSub,
  InsightTop,
  InsightUl,
  CardWrapper,
} from "../../styled-components/InsightsElements";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import ikea from "../../images/TrustedSection/ikea.png";
import delong from "../../images/TrustedSection/delonghi.png";
gsap.registerPlugin(ScrollTrigger);

const InsightsSection = () => {
  const containerRef = useRef();
  const moduleContainerRef = useRef();

  useLayoutEffect(() => {
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
    <InsightContainer ref={moduleContainerRef}>
      <InsightHeader>Read our latest insights</InsightHeader>
      <InsightTop>
        <InsightSub>
          LeedSource shares its expertise and experience on a <br />
          regular basis, no subscription fee required.
        </InsightSub>
        <InsightUl>
          <li>ALL</li>
          <li>IKEA Middle East</li>
          <li>Porsche Middle East</li>
          <li>Delonghi</li>
          <li>ADQ</li>
        </InsightUl>
      </InsightTop>
      <InsightContent ref={containerRef}>
        <CardWrapper>
          <InsightCard>
            <img src={ikea} alt="ikea-logo" />
            <h2>
              Trusted experts. Proven <br />
              results.
            </h2>
            <p>
              Our large network of UAE lenders includes established <br />
              and trusted brands includes government entities.
            </p>
            <button>Read More</button>
          </InsightCard>
        </CardWrapper>
        <CardWrapper>
          <InsightCard alt="true">
            <img src={delong} alt="delonghi-logo" />
            <h2>
              Trusted experts. Proven <br />
              results.
            </h2>
            <p>
              Our large network of UAE lenders includes established <br />
              and trusted brands includes government entities.
            </p>
            <button>Read More</button>
          </InsightCard>
        </CardWrapper>
        <CardWrapper>
          <InsightCard>
            <img src={ikea} alt="ikea-logo" />
            <h2>
              Trusted experts. Proven <br />
              results.
            </h2>
            <p>
              Our large network of UAE lenders includes established <br />
              and trusted brands includes government entities.
            </p>
            <button>Read More</button>
          </InsightCard>
        </CardWrapper>
        <CardWrapper>
          <InsightCard alt="true">
            <img src={delong} alt="delonghi-logo" />
            <h2>
              Trusted experts. Proven <br />
              results.
            </h2>
            <p>
              Our large network of UAE lenders includes established <br />
              and trusted brands includes government entities.
            </p>
            <button>Read More</button>
          </InsightCard>
        </CardWrapper>
      </InsightContent>
    </InsightContainer>
  );
};

export default InsightsSection;
