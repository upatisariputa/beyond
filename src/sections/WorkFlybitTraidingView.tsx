import React from "react";
import Slick from "react-slick";
import { CommonLayout, CommonLayoutBlackBg } from "../../styles/CommonStyles";
import { ImageElement } from "../../styles/elementStyles/ImageElementStyles";
import {
  WorkFlybitContentContainer,
  WorkFlybitImageWrapper,
  WorkFlybitSlickSliderWrapper,
} from "../../styles/WorkFlybitSection";

import { MainTextComponent } from "../components/common";

const WorkFlybitSection = () => {
  const title = "Flybit TradingView Chart";
  const texts = [
    "TradingView Chart 마이그레이션",
    "TradingView Chart WebSocket 연결",
    "Chart Socket Server 유지보수",
  ];
  const images = [
    "/images/flybitChart.png",
    "/images/flybitChartReset.png",
    "/images/flybitChartSocket.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const mappingImages = images.map((image, idx) => (
    <div key={image + idx.toString()}>
      <ImageElement src={image} imgHeight="50vh" imgWidth="40vw" />
    </div>
  ));

  return (
    <>
      <CommonLayout>
        <CommonLayoutBlackBg />
        <WorkFlybitContentContainer>
          <MainTextComponent title={title} texts={texts} />
          <WorkFlybitImageWrapper>
            <WorkFlybitSlickSliderWrapper>
              <Slick {...settings}>{mappingImages}</Slick>
            </WorkFlybitSlickSliderWrapper>
          </WorkFlybitImageWrapper>
        </WorkFlybitContentContainer>
      </CommonLayout>
    </>
  );
};

export default WorkFlybitSection;
