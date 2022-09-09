import React from "react";
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

const OverviewSection = () => {
  return (
    <OverviewContainer>
      <OverviewHeader>
        Our Product
        <br />
        Overview
      </OverviewHeader>
      <OverviewContent>
        <OverviewMenu>
          <ul>
            <li className="main">SUPPLY CHAIN MANAGEMENT</li>
            <li>CRM and Customer Experience</li>
            <li>Financial Management</li>
            <li>Business Technology Platform</li>
            <li>Spend Management</li>
            <li>Human Capital</li>
            <li>Workflow Automation</li>
            <li>Performance</li>
            <li>Task Management</li>
          </ul>
        </OverviewMenu>
        <OverviewCard>
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
