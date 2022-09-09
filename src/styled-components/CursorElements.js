import styled from "styled-components";

export const MainCursor = styled.div`
  z-index: 10000;

  pointer-events: none;
  // overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  mix-blend-mode: difference;

  .main-cursor-background {
    background: white;
    border-radius: 50%;
    width: 0.52vw;
    height: 0.52vw;
    transition: 0.3s all ease-in-out !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SecondaryCursor = styled.div`
  z-index: 10000;
  height: 3.13vw;
  width: 3.13vw;
  pointer-events: none;
  // overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;

  .cursor-background {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 0.05vw solid rgb(255, 255, 255);
    position: relative;
    background: ${({ hover }) => (hover ? "white" : "transparent")};
    transition: 0.3s all ease-in-out !important;
  }
`;
