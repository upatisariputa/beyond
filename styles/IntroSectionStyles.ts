import styled from "styled-components";

const meIconImg = styled.img`
  position: absolute;
  object-fit: fill;
`;

export const IntroAboutWord = styled.div`
  position: relative;
  color: orange;
  z-index: 3;
`;

export const IntroContent = styled.div`
  position: relative;
  color: orange;
`;

export const IntroPointArea = styled.div`
  position: relative;
  width: 13vw;
  height: 60vh;
  top: 35vh;
  left: 45vw;
  cursor: pointer;
`;

export const InfjImg = styled(meIconImg)`
  top: -15vh;
  right: 0vw;
  height: 18vh;
  width: 15vw;
`;

export const JavaScriptImg = styled(meIconImg)`
  top: 12vh;
  right: 17vw;
  height: 18vh;
  width: 10vw;
`;

export const TypeScriptImg = styled(meIconImg)`
  top: 35vh;
  right: 17vw;
  height: 18vh;
  width: 10vw;
`;

export const ReactImg = styled(meIconImg)`
  top: 12vh;
  left: 17vw;
  height: 18vh;
  width: 10vw;
`;

export const NodejsImg = styled(meIconImg)`
  top: 35vh;
  left: 17vw;
  height: 18vh;
  width: 10vw;
`;
