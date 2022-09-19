import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

export const VideoBackground = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5vw 10vw;
  background: black;
  position: fixed;
  z-index: 12;
  bottom: 0;
  transition: 0.3s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoWrapper = styled.video`
  height: 100%;
  width: 100%;
`;

export const CrossSign = styled(AiFillCloseCircle)`
  font-size: 3vw;
  color: #71a2ff;
  position: absolute;
  top: 3vw;
  right: 3vw;
  cursor: pointer;
`;
