import styled from "styled-components";
import framesea from "../images/BlogSection/framesea.jpg";
import porsche from "../images/BlogSection/porsche1.jpg";

export const BlogContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 5.21vw 7.24vw 5.21vw 7.24vw;
  background: #09011b;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const BlogRow = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 893px;
  height: 995px;
`;

export const BlogRow2 = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  height: 995px;
  padding-right: 150px;

  h2 {
    color: #f3f2ff;
    font-size: 50px;
    line-height: 48px;
    letter-spacing: -1px;
    font-weight: 600;
    margin: 0px;
  }

  p {
    color: #b6bdcc;
    font-size: 16px;
    line-height: 25px;
    font-weight: 300;
    margin: 0px;
  }

  button {
    font-size: 16px;
    font-weight: 300;
    color: #71a2ff;
    background: none;
    text-decoration: underline;
    letter-spacing: 2.24px;
    border: none;
  }
`;

export const BlogOption = styled.div`
  width: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const BlogData = styled.div`
  p {
    color: #71a2ff;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    margin: 0px;
    padding-bottom: 10px;
  }

  h2 {
    color: #a1a7c4;
    font-size: 20px;
    line-height: 27px;
    font-weight: 400;
    margin: 0px;
  }
`;

export const BlogPic = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 11px;
  display: block;
`;

export const BlogGridBig = styled.div`
  width: 893px;
  height: 480px;
  border-radius: 28px;
  padding: 235px 27.1px 42px 27.1px;
  background-image: url(${framesea});
  background-size: cover;
  background-position: center center;
  position: relative;

  &::before {
    content: "";
    width: 893px;
    height: 480px;
    border-radius: 28px;
    position: absolute;
    top: 0;
    right: 0;
    background: transparent linear-gradient(0deg, #171629 0%, #09011c00 100%) 0%
      0% no-repeat padding-box;
    z-index: 1;
  }

  p {
    margin: 0px;
    padding-bottom: 20px;
    color: #71a2ff;
    font-weight: 600;
    font-size: 18px;
    z-index: 2;
    position: relative;
  }

  h2 {
    margin: 0px;
    letter-spacing: -1px;
    padding-bottom: 20px;
    line-height: 48px;
    font-weight: 600;
    font-size: 50px;
    z-index: 2;
    position: relative;
    color: white;
  }

  button {
    width: 142px;
    height: 41px;
    z-index: 2;
    position: relative;
    border-radius: 30px;
    background: white;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    color: #000000;
    border: none;
  }
`;

export const BlogGridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BlogGridSmall1 = styled.div`
  width: 433px;
  height: 496px;
  border-radius: 28px;
  padding: 174px 27.1px 42px 27.1px;
  background-image: url(${porsche});
  background-position: top center;
  background-size: 433px 283px;
  background-repeat: no-repeat;
  position: relative;
  background-color: #161428;

  &::before {
    content: "";
    width: 433px;
    height: 283px;
    position: absolute;
    top: 0;
    right: 0;
    background: transparent linear-gradient(0deg, #171629 0%, #09011c00 100%) 0%
      0% no-repeat padding-box;
    z-index: 1;
  }

  p {
    margin: 0px;
    padding-bottom: 20px;
    color: #71a2ff;
    font-weight: 600;
    font-size: 18px;
    z-index: 2;
    position: relative;
  }
  h2 {
    margin: 0px;
    letter-spacing: -1.65px;
    padding-bottom: 20px;
    line-height: 31px;
    font-weight: 600;
    font-size: 28px;
    color: white;
    z-index: 2;
    position: relative;
  }
  h3 {
    margin: 0px;
    padding-bottom: 20px;
    line-height: 25px;
    font-weight: 300;
    font-size: 16px;
    color: #787c8e;
  }
  button {
    font-size: 16px;
    font-weight: 300;
    color: #71a2ff;
    background: none;
    text-decoration: underline;
    letter-spacing: 2.24px;
    border: none;
  }
`;
