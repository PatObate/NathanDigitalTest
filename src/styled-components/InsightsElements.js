import styled from "styled-components";

export const InsightContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 2;
  background: #050215;
  padding: 5.21vw 0vw 5.21vw 7.24vw;
`;

export const InsightHeader = styled.h1`
  font-size: 50px;
  font-weight: 600;
  color: white;
  margin: 0;
  letter-spacing: -1px;
  line-height: 48px;
  padding-bottom: 20px;
`;

export const InsightSub = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: white;
  margin: 0;
  line-height: 25px;
`;

export const InsightTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 85px;
  padding-right: 7.24vw;
`;

export const InsightUl = styled.ul`
  font-size: 20px;
  display: flex;
  color: white;
  list-style: none;
  width: 650px;
  justify-content: space-between;
  align-items: center;
`;

export const InsightContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InsightCard = styled.div`
  height: 445px;
  width: 850px;
  padding: 85px 100px 25px 369px;
  background: #d0e4f9;
  background: ${({ alt }) => (alt ? "#F2E6E8" : "#d0e4f9")};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 32px;

  img {
    height: 3vw;
    width: auto;
    display: block;
  }

  button {
    height: 57px;
    width: 180px;
    border-radius: 30px;
    color: white;
    font-size: 20px;
    font-weight: 300;
    background: #71a2ff;
    border: none;
  }

  h2 {
    font-size: 35px;
    font-weight: 600;
    letter-spacing: -2.06px;
    color: #050215;
    line-height: 38px;
    margin: 0px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    color: #0c0820;
    line-height: 25px;
    margin: 0px;
  }
`;
