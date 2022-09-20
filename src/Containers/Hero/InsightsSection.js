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
  const tl5 = useRef();
  const moduleContainerRef = useRef();
  const z = gsap.utils.selector(moduleContainerRef);

  // const rotateInsightEffect = () => {
  //   var cards = gsap.utils.toArray(".insight-card"),
  //     radius = 520;

  //   gsap.set(containerRef.current, {
  //     perspective: 900,
  //     transformStyle: "preserve-3d",
  //   });

  //   cards.forEach(function (element, index) {
  //     gsap.set(element, {
  //       rotationY: (index * 360) / cards.length,
  //       transformOrigin: "50% 50% " + -radius,
  //     });
  //     gsap.to(element, {
  //       rotationY: "-=150",
  //       scrollTrigger: {
  //         trigger: moduleContainerRef.current,
  //         start: "top top",
  //         end: "+=100%",
  //         scrub: 2,
  //         pin: true,
  //       },
  //     });
  //   });
  // };

  useLayoutEffect(() => {
    // rotateInsightEffect();

    let scrollTween = gsap.to(containerRef.current, {
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

    gsap.to(z(".card-1"), {
      rotateY: 40,
      scrollTrigger: {
        trigger: z(".card-1"),
        containerAnimation: scrollTween,
        scrub: 2,
        start: "start",
      },
    });

    gsap.to(z(".card-2"), {
      rotateY: 40,
      scrollTrigger: {
        trigger: z(".card-2"),
        containerAnimation: scrollTween,
        scrub: 2,
        start: "start",
      },
    });
    gsap.to(z(".card-3"), {
      rotateY: -40,
      scrollTrigger: {
        trigger: containerRef.current,
        containerAnimation: scrollTween,
        scrub: 2,
        start: "end",
        markers: true,
      },
    });
    gsap.from(z(".card-3"), {
      rotateY: 40,
      scrollTrigger: {
        trigger: z(".card-3"),
        containerAnimation: scrollTween,
        scrub: 2,
        start: "start",
      },
    });
    gsap.to(z(".card-4"), {
      rotateY: 40,
      scrollTrigger: {
        trigger: z(".card-4"),
        containerAnimation: scrollTween,
        scrub: 2,
        start: "start",
      },
    });

    tl5.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: moduleContainerRef.current,
          start: "top +=500",
        },
      })
      .from(z(".insight-header"), {
        x: -100,
        duration: 0.3,
        opacity: 0,
      })
      .from(z(".insight-sub"), {
        x: -100,
        duration: 0.3,
        opacity: 0,
      });
  });
  return (
    <InsightContainer ref={moduleContainerRef}>
      <InsightHeader className="insight-header">
        Our trusted Partners & Clients
      </InsightHeader>
      <InsightTop>
        <InsightSub className="insight-sub">
          Lead Source shares its expertise and experience on a <br />
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
          <InsightCard className="card-1">
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
          <InsightCard alt="true" className="card-2">
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
          <InsightCard className="card-3">
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
          <InsightCard alt="true" className="card-4">
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
        <CardWrapper />
        <CardWrapper />
      </InsightContent>
    </InsightContainer>
  );
};

export default InsightsSection;
