import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 45vh;
  width: 100%;
  z-index: 2;
  position: relative;
  background: #09011b;
  padding: 5.21vw 7.24vw;
  border-top: 0.01vw solid #b6bdcc;
`;

export const FooterOptions = styled.div`
  width: 12.5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.04vw;
`;

export const FooterOption = styled.p`
  font-size: 0.73vw;
  font-weight: 300;
  margin: 0;
  color: #b6bdcc;
`;

export const FooterContent = styled.p`
  font-size: 0.63vw;
  font-weight: 300;
  margin: 0;
  line-height: 0.89vw;
  color: #b6bdcc;
`;
