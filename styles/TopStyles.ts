import styled from "styled-components";

export const TopLayout = styled.div`
  top: 10px;
  width: 95vw;
  height: 20px;
  z-index: 99;
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 0;
`;

export const TopIconWrapper = styled.div``;

export const TopIconImg = styled.img`
  width: 200px;
  height: 100px;
`;

export const TopLink = styled.a``;

export const TopButtonsWrapper = styled.div`
  width: 480px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const TopButtonWrapper = styled.div`
  cursor: pointer;
`;

export const TopButtonImg = styled.img`
  width: 150px;
  height: 50px;
`;
