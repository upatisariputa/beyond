import styled from "styled-components";

export const MainText = styled.div<{ isTitle?: boolean }>`
  font-size: ${({ isTitle }) => (isTitle ? "30px" : "20px")};
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  color: ${({ isTitle }) => (isTitle ? "orange" : "white")};
  padding-bottom: ${({ isTitle }) => (isTitle ? "5vh" : "3vh")};
`;
