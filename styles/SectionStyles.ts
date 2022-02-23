import styled from "styled-components";

interface SectionBGProps {
  src: string;
}

export const LayoutBGImg = styled.div<SectionBGProps>`
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => props.src};
  object-fit: cover;
`;
