import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/transform.scss";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import logo from "../../svgs/TransformSection/Logo.svg";
import Sidebar from "../../components/sidebar";
import { DropDown } from "../../styled-components/TransformElements";
import { Plane, useCurtains } from "react-curtains";
import { Vec2 } from "curtainsjs";
import { vertexShader, fragmentShader } from "../../shaders/shaders";
import img from "../../images/TransformSection/background.jpg";
gsap.registerPlugin(ScrollTrigger);

const TransformSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [plane, setPlane] = useState(null);

  const mousePosition = useRef(new Vec2());
  const mouseLastPosition = useRef(new Vec2());

  const handleToggle = () => setIsOn(true);
  const handleToggle2 = () => setIsOn(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const digitalRef = useRef();
  const zoomRef = useRef();
  const tl2 = useRef();

  useEffect(() => {
    // tl.current = gsap.timeline();

    tl2.current = gsap
      .timeline()
      .to(".curtains-canvas", {
        opacity: 1,
        duration: 5,
      });
  });

  const deltas = useRef({
    max: 0,
    applied: 0,
  });

  const uniforms = {
    resolution: {
      // resolution of our plane
      name: "uResolution",
      type: "2f", // notice this is an length 2 array of floats
      value: [0, 0],
    },
    time: {
      // time uniform that will be updated at each draw call
      name: "uTime",
      type: "1f",
      value: 0,
    },
    mousePosition: {
      // our mouse position
      name: "uMousePosition",
      type: "2f", // again an array of floats
      value: mousePosition.current,
    },
    mouseMoveStrength: {
      // the mouse move strength
      name: "uMouseMoveStrength",
      type: "1f",
      value: 0,
    },
  };

  useCurtains(
    (curtains) => {
      const onMouseMove = (e) => {
        // update mouse last pos
        mouseLastPosition.current.copy(mousePosition.current);

        const mouse = new Vec2();

        // get our mouse/touch position
        if (e.targetTouches) {
          mouse.set(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        } else {
          mouse.set(e.clientX, e.clientY);
        }

        // lerp the mouse position a bit to smoothen the overall effect
        mousePosition.current.set(
          curtains.lerp(mousePosition.current.x, mouse.x, 0.3),
          curtains.lerp(mousePosition.current.y, mouse.y, 0.3)
        );

        // calculate the mouse move strength
        if (mouseLastPosition.current.x && mouseLastPosition.current.y) {
          let delta =
            Math.sqrt(
              Math.pow(
                mousePosition.current.x - mouseLastPosition.current.x,
                2
              ) +
                Math.pow(
                  mousePosition.current.y - mouseLastPosition.current.y,
                  2
                )
            ) / 30;
          delta = Math.min(4, delta);
          // update max delta only if it increased
          if (delta >= deltas.current.max) {
            deltas.current.max = delta;
          }
        }

        if (plane) {
          // update our mouse position uniform
          plane.uniforms.mousePosition.value = plane.mouseToPlaneCoords(
            mousePosition.current
          );
        }
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onMouseMove, { passive: true });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("touchmove", onMouseMove, { passive: true });
      };
    },
    [plane]
  );

  const setResolution = (plane) => {
    const planeBBox = plane.getBoundingRect();
    plane.uniforms.resolution.value = [planeBBox.width, planeBBox.height];
  };

  const onReady = (plane) => {
    plane.setPerspective(35);

    deltas.current.max = 2;

    setResolution(plane);

    setPlane(plane);
  };

  const onRender = (plane) => {
    // increment our time uniform
    plane.uniforms.time.value++;

    // decrease both deltas by damping : if the user doesn't move the mouse, effect will fade away
    deltas.current.applied +=
      (deltas.current.max - deltas.current.applied) * 0.02;
    deltas.current.max += (0 - deltas.current.max) * 0.01;

    // send the new mouse move strength value
    plane.uniforms.mouseMoveStrength.value = deltas.current.applied;
  };

  const onAfterResize = (plane) => {
    setResolution(plane);
  };
  return (
    <div className="digital-wrapper" ref={digitalRef}>
      <Plane
        className="SimplePlane"
        // plane init parameters
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        widthSegments={20}
        heightSegments={20}
        uniforms={uniforms}
        // plane events
        onReady={onReady}
        onRender={onRender}
        onAfterResize={onAfterResize}
      >
        <img src={img} data-sampler="simplePlaneTexture" alt="" />
        <div className="menu" onClick={toggle}></div>
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
              className="navigation-menu"
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
            <div className="navigation-menu">SERVICE & SUPPORT</div>
            <div />
            <div />
            <div />
            <div className="navigation-menu2">CONTACT US</div>
          </nav>
        </div>

        <h1 className="transform-header">
          Software can <br />
          transform your <br />
          business
        </h1>
        <div />
      </Plane>
    </div>
  );
};

export default TransformSection;
