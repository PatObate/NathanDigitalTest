import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  position: fixed;
  z-index: 12;
  right: ${({ toggle }) => (toggle ? "0" : "-100vw")};
  bottom: 0;
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
  transition: 0.3s all ease-in-out !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoWrapper = styled.video`
  height: 80vh;
  width: 90%;
`;
