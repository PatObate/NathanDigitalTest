import styled from "styled-components";
import img1 from "../images/InsightSection/ikea1.jpg";
import img2 from "../images/InsightSection/ikea2.jpg";

export const InsightContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 2;
  background: #09011b;
  padding: 5.21vw 0vw 5.21vw 0vw;
`;

export const InsightHeader = styled.h1`
  font-size: 2.6vw;
  font-weight: 600;
  color: white;
  margin: 0;
  letter-spacing: -0.05vw;
  line-height: 2.5vw;
  padding: 0vw 0vw 1.04vw 7.24vw;
`;

export const InsightSub = styled.p`
  font-size: 0.83vw;
  font-weight: 300;
  color: white;
  margin: 0;
  line-height: 1.3vw;
  padding: 0vw 0vw 66px 7.24vw;
`;

export const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
`;

export const CardWrapperStart = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
`;

export const InsightTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4.43vw;
  padding-right: 7.24vw;
  padding-left: 7.24vw;
`;

export const InsightUl = styled.ul`
  font-size: 1.04vw;
  display: flex;
  color: white;
  list-style: none;
  width: 33.85vw;
  justify-content: space-between;
  align-items: center;
`;

export const InsightContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 25vw;
`;

export const InsightCard = styled.div`
  width: 527px;
  height: 301px;
  padding: 38px 42px;
  background: #141226;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 32px;
  img {
    height: 61px;
    width: auto;
    display: block;
  }
  h2 {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1.65px;
    color: #ffffff;
    line-height: 31px;
    margin: 0vw;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    color: #736f88;
    line-height: 25px;
    margin: 0vw;
  }
`;
