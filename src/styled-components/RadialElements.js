import styled from "styled-components";

export const RadialCursor = styled.div`
  height: 52.08vw;
  width: 52.08vw;
  overflow: hidden;
  border-radius: 50%;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
  position: fixed;
  z-index: 1;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.034) 14%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: blur(3rem);
`;
