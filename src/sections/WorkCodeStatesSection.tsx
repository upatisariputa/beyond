import React from "react";
import ReactPlayer from "react-player";
import { CommonLayout, CommonLayoutImg } from "../../styles/CommonStyles";
import {
  LaptopContainer,
  LaptopImg,
  LaptopWrapper,
  WorkCodeStatescontentContainer,
} from "../../styles/WorkCodeStatesSectionStyles";
import { MainTextComponent } from "../components/common";

type Props = {};

const WorkCodeStatesSection = (props: Props) => {
  const title = "Project at CodeStates";
  const texts = [
    "Platform Crawler (React, Django)",
    "Uritube (React, Node.js)",
  ];

  return (
    <>
      <CommonLayout>
        <CommonLayoutImg src="./images/main01.jpg" />
        <WorkCodeStatescontentContainer>
          <MainTextComponent title={title} texts={texts} />
          <LaptopContainer>
            <LaptopWrapper>
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=nzxEIgLlrlI"}
                width="42vw"
                height="53vh"
                muted={true}
                controls={true}
              ></ReactPlayer>
            </LaptopWrapper>
            <LaptopImg src="./images/macbook.png" />
          </LaptopContainer>
        </WorkCodeStatescontentContainer>
      </CommonLayout>
    </>
  );
};

export default WorkCodeStatesSection;
