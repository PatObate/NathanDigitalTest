import styled from "styled-components";

export const OverviewContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5.21vw 7.24vw;
  background: #0c0820;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const OverviewHeader = styled.h1`
  font-size: 5.21vw;
  color: white;
  font-weight: 600;
  letter-spacing: -0.31vw;
  line-height: 4.58vw;
  margin: 0vw;
  width: 100%;
`;

export const OverviewContent = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OverviewMenu = styled.div`
  ul {
    font-size: 1.04vw;
    list-style: none;
    color: white;
    padding: 0vw;
    line-height: 2.7;

    .main {
      text-decoration: underline;
      text-decoration-color: #71a2ff;
      color: #71a2ff;
    }
  }
`;

export const OverviewCard = styled.div`
  width: 62.76vw;
  height: 32.85vw;
  padding: 60px;
  border-radius: 2.81vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  ::before {
    content: "";
    width: 62.76vw;
    height: 32.85vw;
    border-radius: 2.81vw;
    position: absolute;
    top: 0vw;
    left: 0vw;
    background: transparent linear-gradient(1deg, #05030f 0%, #09011c05 100%) 0%
      0% no-repeat padding-box;
  }
`;

export const OverviewRow = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const OverviewRow2 = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
`;

export const OverviewImg = styled.img`
  height: 13.5vw;
  width: auto;
  z-index: 2;
`;

export const OverviewButton = styled.button`
  width: 185px;
  height: 60px;
  background: white;
  border-radius: 25px;
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: 100;
  z-index: 2;
`;

export const OverviewData = styled.div`
  .icon1 {
    width: 65px;
    height: 65px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #191d3f;
    margin-bottom: 15px;
  }
  img {
    height: 20px;
    width: auto;
    display: block;
  }
  .icon2 {
    width: 65px;
    height: 65px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #463b3f;
    margin-bottom: 15px;
  }
  .icon3 {
    width: 65px;
    height: 65px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #463b3f;
    margin-bottom: 15px;
  }
  .icon4 {
    width: 65px;
    height: 65px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #31454c;
    margin-bottom: 15px;
  }

  h2 {
    margin: 0px 0px 15px 0px;
    color: white;
    font-size: 20px;
    font-weight: 600;
  }

  p {
    margin: 0px;
    color: white;
    font-size: 20px;
    font-weight: 100;
  }
`;
