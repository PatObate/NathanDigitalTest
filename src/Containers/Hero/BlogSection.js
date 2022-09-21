import React from "react";
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

const BlogSection = () => {
  return (
    <>
      <BlogContainer>
        <BlogRow>
          <BlogGridBig>
            <p>#ChallengeFit</p>
            <h2>
              Enabled HRMS Enhancement <br />
              solutions for UAE sector
            </h2>
            <button>Learn More</button>
          </BlogGridBig>
          <BlogGridContainer>
            <BlogGridSmall1>
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
              <button>EXPLORE</button>
            </BlogGridSmall1>
            <BlogGridSmall1>
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
              <button>EXPLORE</button>
            </BlogGridSmall1>
          </BlogGridContainer>
        </BlogRow>
        <BlogRow2>
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
            <BlogPic src={group} alt="image" />
            <BlogData>
              <p>#ChallengeFit</p>
              <h2>
                Enabled HRMS Enhancement solutions for <br />
                UAE sector
              </h2>
            </BlogData>
          </BlogOption>
          <BlogOption>
            <BlogPic src={img2} alt="image" />
            <BlogData>
              <p>#ChallengeFit</p>
              <h2>
                Enabled HRMS Enhancement solutions for <br />
                UAE sector
              </h2>
            </BlogData>
          </BlogOption>
          <BlogOption>
            <BlogPic src={img2} alt="image" />
            <BlogData>
              <p>#ChallengeFit</p>
              <h2>
                Enabled HRMS Enhancement solutions for <br />
                UAE sector
              </h2>
            </BlogData>
          </BlogOption>
          <BlogOption>
            <BlogPic src={img2} alt="image" />
            <BlogData>
              <p>#ChallengeFit</p>
              <h2>
                Enabled HRMS Enhancement solutions for <br />
                UAE sector
              </h2>
            </BlogData>
          </BlogOption>
          <button>SEE MORE</button>
        </BlogRow2>
      </BlogContainer>
    </>
  );
};

export default BlogSection;
