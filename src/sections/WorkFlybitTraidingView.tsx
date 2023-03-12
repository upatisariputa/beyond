import React from "react";
import ReactPlayer from "react-player";
import { CommonLayout, CommonLayoutImg } from "../../styles/CommonStyles";
import { ImageElement } from "../../styles/elementStyles/ImageElementStyles";
import {
  WorkFlybitContentContainer,
  WorkFlybitImageWrapper,
} from "../../styles/WorkFlybitSection";

import { MainTextComponent } from "../components/common";

const WorkFlybitSection = () => {
  const title = "Flybit TradingView Chart";
  const texts = ["TradingView Chart 마이그레이션", "Chart Socket Server "];

  return (
    <>
      <CommonLayout>
        {/* <CommonLayoutImg src="/images/main01.jpg" /> */}
        <WorkFlybitContentContainer>
          <MainTextComponent title={title} texts={texts} />
          <WorkFlybitImageWrapper>
            <ImageElement
              src="/images/flybitImg.png"
              imgHeight="50vh"
              imgWidth="30vw"
            />
          </WorkFlybitImageWrapper>
        </WorkFlybitContentContainer>
      </CommonLayout>
    </>
  );
};

export default WorkFlybitSection;
