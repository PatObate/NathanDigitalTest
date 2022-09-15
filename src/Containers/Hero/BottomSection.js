import React, { useRef, useLayoutEffect } from "react";
import "../../scss/bottom.scss";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import logo from "../../svgs/BottomSection/Nathan-logo.svg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const BottomSection = () => {
  const tl6 = useRef();
  const bottomRef = useRef();
  const m = gsap.utils.selector(bottomRef);

  useLayoutEffect(() => {
    tl6.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top +=500",
        },
      })
      .from(m(".bot1"), {
        x: -100,
        duration: 0.3,
        opacity: 0,
      })
      .from(m(".bot2"), {
        y: 200,
        duration: 0.3,
        opacity: 0,
      })
      .from(m(".bot3"), {
        x: 100,
        duration: 0.3,
        opacity: 0,
      });

    tl6.current.scrollTrigger.refresh();
  }, []);

  return (
    <div className="bottom-container">
      <div>
        <h1 className="bottom-header">
          Step up to a cutting-edge <br />
          SAS experience with Nathan Digital. <br />
          <span> You’ll never look back.</span>
        </h1>
        <button className="bottom-button">Contact Us</button>
      </div>
      <div className="bottom-div" ref={bottomRef}>
        <div className="bottom-col bot1">
          <div>
            <h2>Products</h2>
            <ul>
              <li>Supply Chain Management</li>
              <li>CRM and Customer Experience</li>
              <li>Financial Management</li>
              <li>Business Technology Platform</li>
              <li>Spend Management</li>
              <li>Human Capital</li>
              <li>Workflow Automation</li>
              <li>Performance Management</li>
              <li>Task & Projects</li>
            </ul>
          </div>
          <h2>Service & Support</h2>
          <h2>App</h2>
          <div>
            <h2>Learn</h2>
            <ul>
              <li>FAQ</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div className="bottom-col bot2">
          <div>
            <h2>Contact</h2>
            <ul>
              <li>Email : info@nathandigital.com</li>
              <li>Phone : +971 4 354 4466</li>
            </ul>
          </div>
          <div>
            <h2>Location (USA, Dubai, Abhu Dhabi)</h2>
            <h3>Head Office</h3>
            <ul>
              <li>
                Los Angeles, 90210 <br />
                California
              </li>
            </ul>
          </div>
          <div>
            <h3>Branch Office</h3>
            <ul>
              <li>
                Office 1006, 10th Floor, Marina <br />
                Plaza, Dubai Marina, Dubai, UAE
              </li>
              <br />
              <li>
                Office 2904B, Sky Tower, Reem <br />
                Island, Abu Dhabi, UAE
              </li>
            </ul>
          </div>
          <div className="icon-container">
            <AiFillInstagram className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillLinkedin className="icon" />
            <AiFillYoutube className="icon" />
          </div>
        </div>
        <div className="bottom-col"></div>
        <div className="bottom-col bot3">
          <img src={logo} alt="nathan-logo" className="icon-logo" />
          <h4>© Nathan Digital, all rights reserved.</h4>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
