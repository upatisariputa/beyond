import React from "react";
import ReactPlayer from "react-player";
import { CommonLayout, CommonLayoutBlackBg } from "../../styles/CommonStyles";
import { ImageElement } from "../../styles/elementStyles/ImageElementStyles";
import {
  WorkFlybitContent,
  WorkFlybitContentContainer,
  WorkFlybitImageWrapper,
} from "../../styles/WorkFlybitSection";

import { MainTextComponent } from "../components/common";

const WorkFlybitSection = () => {
  const title = "flybit.com";
  const texts = [
    "Vue.js -> React.js 마이그레이션",
    "모든 페이지 React.js로 전환",
    "작업기간 1년",
    "모듈 제작",
  ];

  return (
    <>
      <CommonLayout>
        <CommonLayoutBlackBg />
        <WorkFlybitContentContainer>
          <MainTextComponent title={title} texts={texts} />
          <WorkFlybitImageWrapper>
            <ImageElement
              src="/images/flybitImg.png"
              imgHeight="50vh"
              imgWidth="40vw"
            />
          </WorkFlybitImageWrapper>
        </WorkFlybitContentContainer>
      </CommonLayout>
    </>
  );
};

export default WorkFlybitSection;
