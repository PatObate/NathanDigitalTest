import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../scss/transform.scss";
import "../../scss/video.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import logo from "../../svgs/TransformSection/Logo.svg";
import Sidebar from "../../components/sidebar";
import { DropDown } from "../../styled-components/TransformElements";
import svgbackground from "../../svgs/VideoSection/background-wave.svg";
import background from "../../images/VideoSection/gradient-overlay.png";
import vid from "../../video/Nathan+Digital+Video.mp4";
import VideoModal from "../../components/video";
import {
  CrossSign,
  VideoBackground,
  VideoWrapper,
} from "../../styled-components/VideoElements";
gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1 },
  },
};

const WaveSection = ({ handleHover, handleHover2 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const cursorRef = React.useRef(null);
  const handleToggle = () => setIsOn(true);
  const handleToggle2 = () => setIsOn(false);
  const transformRef = useRef();
  const waveRef = useRef();
  const navRef = useRef();
  const videoRef = useRef();
  const textRef = useRef();
  const menuRef = useRef();
  const wavybackRef = useRef();
  const tl2 = useRef();
  const tl2two = useRef();

  // var foo = true;
  // if (foo) {
  //   window.location.reload(true);
  //   foo = false;
  // }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onClickVid = () => {
    tl2.current = gsap
      .timeline({})
      .to(
        videoRef.current,
        {
          right: "0px",
        },
        0
      )
      .to(
        videoRef.current,
        {
          opacity: 1,
        },
        0.8
      )
      .to(
        videoRef.current,
        {
          scale: 1,
        },
        1.5
      );
  };

  const onClickLeaveVid = () => {
    tl2two.current = gsap
      .timeline({})
      .to(
        videoRef.current,
        {
          right: "-100vw",
        },
        1.5
      )
      .to(
        videoRef.current,
        {
          opacity: 0,
        },
        0.8
      )
      .to(
        videoRef.current,
        {
          scale: 0.7,
        },
        0
      );
  };

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 1.6;
      const mouseY = clientY - cursorRef.current.clientHeight / 1.9;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    gsap.set(videoRef.current, {
      opacity: 0,
      right: "100vw",
      scale: 0.7,
    });
  });

  return (
    <>
      <div className="wave-wrapper" ref={waveRef}>
        <VideoBackground ref={videoRef}>
          <CrossSign onClick={onClickLeaveVid} />
          <VideoWrapper controls={true}>
            <source src={vid} type="video/mp4" />
          </VideoWrapper>
        </VideoBackground>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <motion.div
          className="menu"
          onClick={toggle}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover2}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          className="digital-wrapper"
          ref={transformRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="radial-cursor" ref={cursorRef} />
          <div className="navbar" ref={navRef}>
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
                      <li>
                        Accounts Receivable, Billing and Revenue Management
                      </li>
                      <li>
                        Governance, Risk, Compliance (GRC), and Cybersecurity
                      </li>
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
            ref={textRef}
          >
            Software that <br />
            transform your <br />
            business

          </h1>
          <div />
        </motion.div>
        <div className="video-container panelsec">
          <div className="demo-video-wrap" onClick={onClickVid}>
            <div className="t_over"></div>
            <div className="t_over"></div>
            <div className="t_over"></div>
            <div className="t_over"></div>
            <div className="t_over">
              <div className="t_container" />
            </div>
            <div className="t_over"></div>
            <div className="t_over"></div>
            <div className="t_over"></div>
            <div className="t_over"></div>
            <video
              className="demo-video"
              autoPlay={true}
              muted={true}
              loop={true}
            >
              <source src={vid} type="video/mp4" />
            </video>
          </div>
        </div>
        {/* <Wave
          animationData={wave}
          LottieOptions={defaultOptions}
          speed={0.25}
          isStopped={false}
          isPaused={false}
        /> */}
        <motion.img
          src={svgbackground}
          alt="background"
          className="wavy-background"
          ref={wavybackRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        />
        <img src={background} alt="background" className="wavy-overlay" />
      </div>
    </>
  );
};

export default WaveSection;
