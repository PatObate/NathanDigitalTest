import styled from "styled-components";
import { Link } from "react-router-dom";


export const SidebarBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  position: fixed;
  z-index: 10;
  right: ${({ toggle }) => (toggle ? "0" : "-100vw")};
  bottom: 0;
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
  transition: 0.3s all ease-in-out !important;
`;

export const SidebarWrapper = styled.div`
  height: 100%;
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 5.21vw 14.06vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const SidebarMenu = styled.div`
  width: 50vw;
  height: 8vw;
  font-size: 5.21vw;
  color: #ffffff94;
  font-weight: 100;
  transition: 0.3s all ease-in-out !important;

  :hover {
    color: white;
    transition: 0.3s all ease-in-out !important;
  }
`;

export const SidebarMenuLink = styled(Link)`
  width: 50vw;
  height: 8vw;
  font-size: 5.21vw;
  color: #ffffff94;
  font-weight: 100;
  text-decoration: none;
  transition: 0.3s all ease-in-out !important;

  :hover {
    color: white;
    transition: 0.3s all ease-in-out !important;
  }
`;

export const SidebarClose = styled.div`
  height: 6.25vw;
  width: 6.25vw;
  background: white;
  border-radius: 100%;
  right: 4vw;
  z-index: 2;
  top: 48%;
  position: absolute;
  color: black;
  font-weight: 300;
  font-size: 1.4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all ease-in-out !important;
  :hover {
    transform: scale(1.2);
    transition: 0.3s all ease-in-out !important;
  }
`;
