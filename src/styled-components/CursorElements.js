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
    width: 10px;
    height: 10px;
    transition: 0.3s all ease-in-out !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SecondaryCursor = styled.div`
  z-index: 10000;
  height: 60px;
  width: 60px;
  pointer-events: none;
  // overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;

  .cursor-background {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid rgb(255, 255, 255);
    position: relative;
    background: ${({ hover }) => (hover ? "white" : "transparent")};
    transition: 0.3s all ease-in-out !important;
  }
`;
