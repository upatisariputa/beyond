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
import MapImages from "../components/common/MapImages";

const WorkFlybitSection = () => {
  const title = "Flybit SVG Chart";
  const texts = [
    "SVG 이용 Chart 개발",
    "개발기간 3주",
    "소수점 계산",
    "Javascript 소수점 오차 계산",
  ];
  const images = ["/images/flybitHoga.png", "/images/flybitDepthChart.png"];

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
