import styled from "styled-components";
import framesea from "../images/BlogSection/framesea.jpg";
import porsche from "../images/BlogSection/porsche1.jpg";

export const BlogContainer = styled.div`
  width: 100%;
  height: 120vh;
  padding: 5.21vw 7.24vw 5.21vw 7.24vw;
  background: #09011b;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const BlogRow = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 46.51vw;
  height: 51.82vw;
`;

export const BlogRow2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  height: 51.82vw;
  padding-right: 8.5vw;

  h2 {
    color: #f3f2ff;
    font-size: 2.6vw;
    line-height: 2.5vw;
    letter-spacing: -0.05vw;
    font-weight: 600;
    margin: 0vw;
  }

  p {
    color: #b6bdcc;
    font-size: 0.83vw;
    line-height: 1.3vw;
    font-weight: 300;
    margin: 0vw;
  }

  button {
    font-size: 0.83vw;
    font-weight: 300;
    color: #71a2ff;
    background: none;
    text-decoration: underline;
    letter-spacing: 0.12vw;
    border: none;
  }
`;

export const BlogOption = styled.div`
  width: 27.04vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const BlogData = styled.div`
  p {
    color: #71a2ff;
    font-size: 0.94vw;
    line-height: 1.25vw;
    font-weight: 600;
    margin: 0vw;
    padding-bottom: 0.52vw;
  }

  h2 {
    color: #a1a7c4;
    font-size: 1.04vw;
    line-height: 1.41vw;
    font-weight: 400;
    margin: 0vw;
  }
`;

export const BlogPic = styled.div`
  height: 7.29vw;
  width: 7.29vw;
  border-radius: 0.57vw;
  display: block;
  background: black;
`;

export const BlogGridBig = styled.div`
  width: 46.51vw;
  height: 25vw;
  border-radius: 1.46vw;
  padding: 12.24vw 1.41vw 2.19vw 1.41vw;
  /* background-image: url(${framesea}); */
  background-size: cover;
  background-position: center center;
  position: relative;

  &::before {
    content: "";
    width: 46.51vw;
    height: 25vw;
    border-radius: 1.46vw;
    position: absolute;
    top: 0;
    right: 0;
    background: transparent linear-gradient(0deg, #171629 0%, #09011c00 100%) 0%
      0% no-repeat padding-box;
    z-index: 1;
  }

  p {
    margin: 0vw;
    padding-bottom: 1.04vw;
    color: #71a2ff;
    font-weight: 600;
    font-size: 0.94vw;
    z-index: 2;
    position: relative;
  }

  h2 {
    margin: 0vw;
    letter-spacing: -0.05vw;
    padding-bottom: 1.04vw;
    line-height: 2.5vw;
    font-weight: 600;
    font-size: 2.6vw;
    z-index: 2;
    position: relative;
    color: white;
  }

  button {
    width: 7.4vw;
    height: 2.14vw;
    z-index: 2;
    position: relative;
    border-radius: 1.56vw;
    background: white;
    font-size: 0.94vw;
    font-weight: 300;
    text-align: center;
    color: #000000;
    border: none;
  }
`;

export const BlogGridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BlogGridSmall1 = styled.div`
  width: 22.55vw;
  height: 25.83vw;
  border-radius: 1.46vw;
  padding: 8.8vw 1.41vw 2.19vw 1.41vw;
  background-image: url(${porsche});
  background-position: top center;
  background-size: 22.55vw 14.74vw;
  background-repeat: no-repeat;
  position: relative;
  background-color: #161428;

  &::before {
    content: "";
    width: 22.55vw;
    height: 14.74vw;
    position: absolute;
    top: 0;
    right: 0;
    background: transparent linear-gradient(0deg, #171629 0%, #09011c00 100%) 0%
      0% no-repeat padding-box;
    z-index: 1;
  }

  p {
    margin: 0vw;
    padding-bottom: 1.04vw;
    color: #71a2ff;
    font-weight: 600;
    font-size: 0.94vw;
    z-index: 2;
    position: relative;
  }

  h2 {
    margin: 0vw;
    letter-spacing: -0.08vw;
    padding-bottom: 1.8vw;
    line-height: 1.61vw;
    font-weight: 600;
    font-size: 1.45;
    color: white;
    z-index: 2;
    position: relative;
  }

  h3 {
    margin: 0vw;
    padding-bottom: 2.5vw;
    line-height: 1.3vw;
    font-weight: 300;
    font-size: 0.83vw;
    color: #787c8e;
  }

  button {
    font-size: 0.83vw;
    font-weight: 300;
    color: #71a2ff;
    background: none;
    text-decoration: underline;
    letter-spacing: 0.12vw;
    border: none;
  }
`;
