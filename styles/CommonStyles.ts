import styled from "styled-components";

export const CommonLayout = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const CommonLayoutImg = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

// export const CommonLayout = styled.div<{ backgroundImgSrc: string }>`
//   height: 100vh;
//   width: 100vw;
//   background-image: url(${(props) => props.backgroundImgSrc});
//   /* position: absolute; */
//   background-size: cover;
// `;

export const CommonCircle = styled.div`
  margin-top: 4px;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  border: 5px solid rgb(163, 151, 198);
  border-radius: 50%;
  position: relative;
`;

export const CommonTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommonTitle = styled.div`
  position: relative;
  color: orange;
  font-size: 30px;
  font-weight: bold;
  height: 45px;
`;

export const CommonText = styled.div`
  position: relative;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  color: beige;
  height: 30px;
  font-size: 20px;
`;
