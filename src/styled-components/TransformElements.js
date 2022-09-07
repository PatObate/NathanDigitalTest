import styled from "styled-components";
import triangle from "../svgs/TransformSection/triangle.svg";

export const DropDown = styled.div`
  height: 35.8vw;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: #f6f5ff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.88vw 0vw 4vw 13.02vw;
  opacity: ${({ drop }) => (drop ? "1" : "0")};
  left: ${({ drop }) => (drop ? "0vh" : "-100vw")};
  transition: 0.3s all ease-in-out !important;

  .drop-row {
    height: 100%;
    width: 17.19vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
  }

  .drop-col {
    height: 13.02vw;
    width: 14.58vw;

    .drop-header {
      font-size: 0.94vw;
      color: black;
      font-weight: 500;
      height: 2.08vw;
      border-bottom: 0.05vw solid #80808059;
      margin: 0vw;
    }

    ul {
      padding: 1.04vw 0vw 0vw 1.04vw;
      margin: 0vw;
      list-style: url(${triangle});
      font-size: 0.83vw;
      color: black;
    }
    li {
      font-size: 0.83vw;
      line-height: 1.9;
    }
  }
`;
