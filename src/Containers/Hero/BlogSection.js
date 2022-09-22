import React, { useEffect, useRef } from "react";
import {
  BlogContainer,
  BlogData,
  BlogGridBig,
  BlogGridContainer,
  BlogGridSmall1,
  BlogOption,
  BlogPic,
  BlogRow,
  BlogRow2,
} from "../../styled-components/BlogElements";
import group from "../../images/BlogSection/businessgroup.jpg";
import img2 from "../../images/BlogSection/aerial-top-view-of-a-solar-panels-power-plant-2021-08-28-11-59-43-utc.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const blogRef = useRef();
  const tlblog = useRef();
  const bloge = gsap.utils.selector(blogRef);

  useEffect(() => {
    tlblog.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: blogRef.current,
          start: "top +=850",
        },
      })
      .from(bloge(".grid-1"), {
        x: -100,
        opacity: 0,
        ease: "back",
        duration: 0.6,
        delay: 0.1,
      })
      .from(bloge(".grid-2"), {
        y: 100,
        opacity: 0,
        ease: "back",
        duration: 0.6,
      })
      .from(bloge(".grid-3"), {
        y: 100,
        opacity: 0,
        ease: "back",
        duration: 0.6,
      })
      .from(bloge(".blog-row-2"), {
        x: 100,
        opacity: 0,
        ease: "back",
        duration: 0.6,
      });
  });
  return (
    <>
      <BlogContainer ref={blogRef}>
        <BlogRow>
          <BlogGridBig className="grid-1">
            <p>#ChallengeFit</p>
            <h2>
              Enabled HRMS Enhancement <br />
              solutions for UAE sector
            </h2>
            <button>Learn More</button>
          </BlogGridBig>
          <BlogGridContainer>
            <BlogGridSmall1 className="grid-2">
              <p>#ATS</p>
              <h2>
                Enabled HRMS Enhancement <br />
                solutions for UAE sector
              </h2>
              <h3>
                Our large network of UAE lenders includes <br />
                established and trusted brands includes <br />
                government entities.
              </h3>
              <div data-hover="explore">
                <button>EXPLORE</button>
              </div>
            </BlogGridSmall1>
            <BlogGridSmall1 className="grid-3">
              <p>#ATS</p>
              <h2>
                Enabled HRMS Enhancement <br />
                solutions for UAE sector
              </h2>
              <h3>
                Our large network of UAE lenders includes <br />
                established and trusted brands includes <br />
                government entities.
              </h3>
              <div data-hover="explore">
                <button>EXPLORE</button>
              </div>
            </BlogGridSmall1>
          </BlogGridContainer>
        </BlogRow>
        <BlogRow2 className="blog-row-2">
          <h2>
            Read our latest <br />
            insights
          </h2>
          <p>
            LeedSource shares its expertise and experience on a regular basis,
            no <br />
            subscription fee required.
          </p>
          <BlogOption>
            {/* <BlogPic src={group} alt="image" /> */}
            <BlogPic />
            <BlogData>
              <p>#ChallengeFit</p>
              <h2>
                Enabled HRMS Enhancement solutions for <br />
                UAE sector
              </h2>
            </BlogData>
          </BlogOption>
          <BlogOption>
            <BlogPic />
            {/* <BlogPic src={img2} alt="image" /> */}
            <BlogData>
              <p>#ChallengeFit</p>
              <h2>
                Enabled HRMS Enhancement solutions for <br />
                UAE sector
              </h2>
            </BlogData>
          </BlogOption>
          <BlogOption>
            <BlogPic />
            {/* <BlogPic src={img2} alt="image" /> */}
            <BlogData>
              <p>#ChallengeFit</p>
              <h2>
                Enabled HRMS Enhancement solutions for <br />
                UAE sector
              </h2>
            </BlogData>
          </BlogOption>
          <BlogOption>
            <BlogPic />
            {/* <BlogPic src={img2} alt="image" /> */}
            <BlogData>
              <p>#ChallengeFit</p>
              <h2>
                Enabled HRMS Enhancement solutions for <br />
                UAE sector
              </h2>
            </BlogData>
          </BlogOption>
          <div data-hover="see more">
            <button>SEE MORE</button>
          </div>
        </BlogRow2>
      </BlogContainer>
    </>
  );
};

export default BlogSection;
