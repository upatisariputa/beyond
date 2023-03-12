import styled from "styled-components";

export const ImageElement = styled.img<{ imgWidth: string; imgHeight: string }>`
  width: ${({ imgWidth }) => imgWidth};
  height: ${({ imgHeight }) => imgHeight};
`;
