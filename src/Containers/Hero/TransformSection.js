import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/transform.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import logo from "../../svgs/TransformSection/Logo.svg";
import Sidebar from "../../components/sidebar";
import { DropDown } from "../../styled-components/TransformElements";
gsap.registerPlugin(ScrollTrigger);

const TransformSection = ({ handleHover, handleHover2 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const cursorRef = React.useRef(null);
  const handleToggle = () => setIsOn(true);
  const handleToggle2 = () => setIsOn(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 1.60;
      const mouseY = clientY - cursorRef.current.clientHeight / 0.60;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  });

  return (
    <div className="digital-wrapper">
      <div className="radial-cursor" ref={cursorRef} />
      <div
        className="menu"
        onClick={toggle}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover2}
      ></div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="navbar">
        <div className="language-wrapper">
          <p className="language">EN</p>
          <p className="language">AR</p>
        </div>
        <nav className="navigation-wrapper">
          <img src={logo} alt="logo" className="logo-picture" />
          <Link
            to="/products"
            className="navigation-menu cursor-hover-item"
            data-cursor-text="LEARN MORE!"
            data-cursor-text-repeat="3"
            onMouseEnter={handleToggle}
            onMouseLeave={handleToggle2}
          >
            PRODUCTS
          </Link>
          <DropDown
            className="drop-down"
            drop={isOn}
            onMouseEnter={handleToggle}
            onMouseLeave={handleToggle2}
          >
            <div className="drop-row">
              <div className="drop-col">
                <p className="drop-header">CRM and Customer Experience</p>
                <ul>
                  <li>Customer Data</li>
                  <li>Marketing</li>
                  <li>Commerce</li>
                  <li>Sales</li>
                  <li>Service</li>
                </ul>
              </div>
              <div className="drop-col">
                <p className="drop-header">Human Capital Module</p>
                <ul>
                  <li>Employee Experience Management</li>
                  <li>Core HR and Payroll with ESS</li>
                  <li>Talent Management</li>
                  <li>HR Analytics and Workforce Planning</li>
                  <li>Sales Performance Management</li>
                </ul>
              </div>
            </div>
            <div className="drop-row">
              <div className="drop-col">
                <p className="drop-header">Financial Management</p>
                <ul>
                  <li>Financial Planning and Analysis</li>
                  <li>Accounting and Financial Close</li>
                  <li>Treasury Management</li>
                  <li>Accounts Receivable, Billing and Revenue Management</li>
                  <li>Governance, Risk, Compliance (GRC), and Cybersecurity</li>
                </ul>
              </div>
              <div className="drop-col">
                <p className="drop-header">Supply Chain Management</p>
                <ul>
                  <li>Supply Chain Planning</li>
                  <li>Supply Chain Logistics</li>
                  <li>Manufacturing</li>
                  <li>Product Lifecycle Management</li>
                  <li>Enterprise Asset Management</li>
                </ul>
              </div>
            </div>
            <div className="drop-row">
              <div className="drop-col">
                <p className="drop-header">Business Technology Platform</p>
                <ul>
                  <li>Application Development and Automation</li>
                  <li>Extended Planning and Analysis</li>
                  <li>Data and Analytics</li>
                  <li>Integrations</li>
                  <li>Artificial Intelligence</li>
                </ul>
              </div>
              <div className="drop-col">
                <p className="drop-header">Workflow Automation</p>
                <ul>
                  <li>Business Network</li>
                  <li>Intelligent Enterprise</li>
                  <li>Manufacturing</li>
                  <li>Product Lifecycle Management</li>
                  <li>Enterprise Asset Management</li>
                </ul>
              </div>
            </div>
          </DropDown>
          <div
            className="navigation-menu"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover2}
          >
            SERVICE & SUPPORT
          </div>
          <div />
          <div />
          <div />
          <div className="navigation-menu2">CONTACT US</div>
        </nav>
      </div>
      <h1
        className="transform-header"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover2}
      >
        Software can <br />
        transform your <br />
        business
      </h1>
      <div />
    </div>
  );
};

export default TransformSection;
