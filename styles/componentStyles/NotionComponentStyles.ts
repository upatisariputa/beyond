import styled from "styled-components";

export const NotionContainer = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const NotionLink = styled.link`
  cursor: pointer;
`;

export const NotionBubbleContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: end; */
`;

export const NotionBubbleTextContainer = styled.div`
  position: relative;
  width: 230px;
  height: 90px;
  bottom: 90px;
  right: 50px;
`;

export const NotionBubbleText = styled.p`
  color: black;
  text-align: right;
  margin-bottom: 20px;
`;

export const NotionBubbleImg = styled.img`
  position: absolute;
  height: 200px;
  width: 300px;
  bottom: 120px;
  right: 0px;
`;

export const NotionImg = styled.img`
  height: 100px;
  width: 100px;
  cursor: pointer;
`;
