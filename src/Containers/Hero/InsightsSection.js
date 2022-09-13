import React from "react";
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
} from "../../styled-components/InsightsElements";
import ikea from "../../images/TrustedSection/ikea.png";
import delong from "../../images/TrustedSection/delonghi.png";

const InsightsSection = () => {
  return (
    <InsightContainer>
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
      <InsightContent>
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
        <InsightCard alt="true">
          {" "}
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
      </InsightContent>
    </InsightContainer>
  );
};

export default InsightsSection;
