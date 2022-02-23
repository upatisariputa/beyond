import styled from "styled-components";

export const OutroLayout = styled.div`
  height: 50vh;
  width: 100vw;
  background-color: rgb(0, 25, 0);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OutroContentContainer = styled.div`
  position: relative;
  left: 17vw;
`;

export const OutroTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OutroText = styled.p<{ isTitle?: boolean }>`
  color: ${({ isTitle }) => (isTitle ? "orange" : "skyblue")};
  font-size: ${({ isTitle }) => (isTitle ? "xx-large" : "medium")};
  margin-bottom: ${({ isTitle }) => (isTitle ? "5vh" : "3vh")};
`;

export const OutroPhotoImg = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  position: relative;
  border-radius: 50%;
  border: 5px solid rgb(255, 151, 198);
  left: 12vw;
  bottom: 5vh;
`;

export const OutroLink = styled.a`
  color: skyblue;
`;
