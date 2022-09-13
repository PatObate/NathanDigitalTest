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
  font-size: 2.6vw;
  font-weight: 600;
  color: white;
  margin: 0;
  letter-spacing: -0.05vw;
  line-height: 2.5vw;
  padding-bottom: 1.04vw;
`;

export const InsightSub = styled.p`
  font-size: 0.83vw;
  font-weight: 300;
  color: white;
  margin: 0;
  line-height: 1.3vw;
`;

export const InsightTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4.43vw;
  padding-right: 7.24vw;
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
  align-items: center;
  justify-content: space-between;
`;

export const InsightCard = styled.div`
  height: 23.18vw;
  width: 44.27vw;
  padding: 4.43vw 5.21vw 1.3vw 19.22vw;
  background: #d0e4f9;
  background: ${({ alt }) => (alt ? "#F2E6E8" : "#d0e4f9")};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 1.67vw;

  img {
    height: 3vw;
    width: auto;
    display: block;
  }

  button {
    height: 2.97vw;
    width: 9.38vw;
    border-radius: 1.56vw;
    color: white;
    font-size: 1.04vw;
    font-weight: 300;
    background: #71a2ff;
    border: none;
  }

  h2 {
    font-size: 1.82vw;
    font-weight: 600;
    letter-spacing: -0.11vw;
    color: #050215;
    line-height: 1.98vw;
    margin: 0vw;
  }

  p {
    font-size: 0.83vw;
    font-weight: 300;
    color: #0c0820;
    line-height: 1.3vw;
    margin: 0vw;
  }
`;
